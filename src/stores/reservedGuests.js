import { observable, action } from 'mobx';
import axios from 'axios';
import moment from 'moment'

import { apiEndpoint } from '../config'

import generateFakeData from '../utils/generate-fake-data'


export default class ReservedGuests {
  // 行
  @observable groups = []; // { id, title=予約者氏名 }
  // グループに属するもの
  @observable items = []; // { id, group=group[i].id, start=予約期間s, end=予約期間e, title=何名 }

  // 追加するためのprop
  @observable groupId = 0;
  @observable groupTitle = '';

  @observable itemId = 0;
  @observable itemGroup = '';
  @observable itemStartTime = '';
  @observable itemEndTime = '';
  @observable itemTitle = '';

  @observable result = '';

  /**
   *  textの変更
   */
  @action.bound
  handleChange = name => e => {
    this[name] = e.target.value;
  }

  // group.titleからgroup.idを取得
  getItemGroup(name) {
    let id = '';
    let newArr = this.groups.slice();
    newArr.forEach(v => { if(v.title === name) id = v.id; })
    return id;
  }

  /* test */
  @action.bound
  addFakeData() {
    this.groups = generateFakeData().groups;
    this.items = generateFakeData().items;
    this.groupId = this.groups.length;
    this.itemId = this.items.length;
  }

  /**
   *  ページを読み込んだ時に呼ばれる
   *  dbから取得しthis.groups, this.itemsに格納
   */
  @action.bound
  async addData() {
    try {
      const res = await this.get();
      let newGroups = [];
      let newItems = [];
      let same = false, sameId = null;
      res.forEach(v => {
        // groupsのtitleに被りがあるか確認
        newGroups.forEach(w => {
          if(w.title === v.subscriber) {
            same = true;
            sameId = w.id;
          }
        });
        // 被りがないなら、まずはgroupsにpush
        if(same === false) {
          newGroups.push({id: this.groupId, title: v.subscriber});
          // itemsにpush { id, group=group[i].id, start=予約期間s, end=予約期間e, title=何名 }
          newItems.push({id: this.itemId, group: this.groupId, start: moment(v.reservedDate), end: moment(v.departureDate), title: v.howManyPeople});
        } else newItems.push({id: this.itemId, group: sameId, start: moment(v.reservedDate), end: moment(v.departureDate), title: v.howManyPeople});

        this.groupId++;
        this.itemId++;
        same = false;
      }); // res.forEach
      this.groups = newGroups;
      this.items = newItems;
    } catch(e) {
      // 通信エラーが起きた時
      console.error(e); // fail
    }
  }

  // タイムラインに予約者を追加
  @action.bound
  addGroups() {
    let newGroups = this.groups.slice();
    let sameGroup = false;
    newGroups.forEach(v => { if(v.title === this.groupTitle) sameGroup = true; })
    // 同じ名前ならpushできない
    if(sameGroup) return;
    newGroups.push({id: this.groupId, title: this.groupTitle});
    this.groups = newGroups;
    this.groupId++;
  }

  // タイムラインの予約者を削除
  @action.bound
  async deleteGroups() {
    let newGroups = this.groups.slice();
    let newItems = this.items.slice();
    let same = {};
    // カレンダーにタイトルがあるかどうか、
    newGroups.forEach((v, i) => { if(v.title === this.groupTitle) same = v; })
    if(Object.keys(same).length) {
      try {
        await this.removeFromDbWithTitle(this.groupTitle);
        newGroups.forEach((v, i) => {
          if(v.title === this.groupTitle) {
            // itemsから該当するものを削除
            newItems.forEach((w, j) => { if(w.id === w.group) newItems.splice(j, 1); })
            // groupsから該当のものを削除
            newGroups.splice(i, 1);
          }
        })
      } catch(e) {
        console.error(e);
      }
    }

    this.groups = newGroups;
    this.items = newItems;
    this.groupTitle = '';
  }

  // タイムラインに予約を追加
  @action.bound
  addItems() {
    // mobxでobservableなarrayを扱う場合一度コピーをつくる
    let newItems = this.items.slice();
    // 氏名からgroup.idを取得し代入
    this.itemGroup = this.getItemGroup(this.groupTitle)
    // グループが存在しないならreturn
    if(this.itemGroup === '' || this.itemGroup === undefined || this.itemGroup === 'undefined') return;
    const momentStart = moment(this.itemStartTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    const momentEnd = moment(this.itemEndTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    // 存在する日付かどうか
    if(!momentStart.isValid() || !momentEnd.isValid()) return;
    // 差分を求めて、Endの方が小さい時return
    if(momentEnd.diff(momentStart, 'seconds') < 0) return;
    // コピーした配列へpush
    newItems.push({id: this.itemId, group: this.itemGroup, start: momentStart, end: momentEnd, title: this.itemTitle});
    // 更新
    this.items = newItems;
    this.itemId++;
    // 初期化
    this.itemGroup = '';
    this.itemStartTime = '';
    this.itemEndTime = '';
    this.itemTitle = '';
  }

  // タイムラインの予約を削除
  @action.bound
  deleteItems() {
    let newGroups = this.groups.slice();
    let newItems = this.items.slice();
    newGroups.forEach((v, i) => {
      if(v.title === this.groupTitle) {
        // itemsから該当するものを削除
        newItems.forEach((w, j) => { if(v.id === w.group) newItems.splice(j, 1); })
      }
    })
    this.items = newItems;
    this.groupTitle = '';
  }

  // groupとitemを同時に追加
  @action.bound
  async addGroupsAndItems() {
    const momentStart = moment(this.itemStartTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    const momentEnd = moment(this.itemEndTime, ["MM/DD/YYYY", "YYYY/MM/DD"]);
    // 存在する日付かどうか
    if(!momentStart.isValid() || !momentEnd.isValid()) return;
    // 差分を求めて、Endの方が小さい時return
    if(momentEnd.diff(momentStart, 'seconds') < 0) return;

    const option = {subscriber: this.groupTitle,
                    reservedDate: momentStart.toDate(),
                    departureDate: momentEnd.toDate(),
                    howManyPeople: this.itemTitle};

    try {
      await this.addToDb(option);
      // dbに入れられた時
      this.addGroups();
      this.addItems();
    } catch(e) {
      // 通信エラーが起きた時
      console.error(e); // fail
    }
    // ****

    this.groupTitle = '';
  }

  // canvasをクリックした時、そのgroupidのtitleを氏名に入力、時間を予約日、出発日に入力
  @action.bound
  inputGroupTitleAndTime(groupid, time, e) {
    let newGroups = this.groups.slice();
    newGroups.forEach(v => { if(groupid === v.id) this.groupTitle = v.title; });
    if(this.itemStartTime === '') this.itemStartTime = moment(time).format("YYYY/MM/DD");
    else if(this.itemStartTime !== '') this.itemEndTime = moment(time).format("YYYY/MM/DD");
  }

  /*
   * ↓↓↓↓　サーバーへの通信処理 ↓↓↓↓
   */
  // calendarに表示させるデータを取得
  @action.bound
  async get() {
    const path = `${apiEndpoint}/api/v1/guest/reserved_get`;
    // serverと通信
    const res = await axios.get(path);
    // 結果をresへ格納
    this.result = res.data;
    return res.data;
  }

  // データベースへ保存するためサーバー側と通信
  async addToDb(option) {
    let res;
    const path = `${apiEndpoint}/api/v1/guest/reserved_add`;
    // serverと通信
    res = await axios.post(path, option);
    // 結果をresへ格納
    this.result = res;
  }

  // データを削除するためサーバー側と通信
  async removeFromDbWithTitle(title) {
    let res;
    const path = `${apiEndpoint}/api/v1/guest/reserved_remove`;
    // serverと通信
    res = await axios.post(path, {subscriber: title});
    // 結果をresへ格納
    this.result = res;
  }


}