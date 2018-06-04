### containers
* AppFolder
* @injectされている
* withAuthorizationに噛まれている

### components
* コンポーネント内で完結できるもの

Navigation.js @inject('session')
auth.userの値によってNavigationコンポーネントを入れ替える


### 配列で@observableが効いていない
↓
```
@observable groups = [];
let newGroups = this.groups.slice();
newGroups.push({id: this.groupId, title: this.groupTitle});
this.groups = newGroups;
```

配列のコピーを作って、弄って、それを@observableなものに入れ直すことで解決