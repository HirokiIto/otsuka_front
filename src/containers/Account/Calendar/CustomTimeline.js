import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import moment from "moment";

import Timeline from 'react-calendar-timeline/lib'


const keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end'
}

@inject('reservedGuests')
@observer
export default class CustomTimeline extends Component {
  constructor(props) {
    super(props);

    const defaultTimeStart = moment()
      .startOf("day");

    const defaultTimeEnd = moment()
      .startOf("day")
      .add(30, "day")

    this.state = {
      defaultTimeStart,
      defaultTimeEnd
    };
  }

  componentDidMount() {
    const { reservedGuests } = this.props;
    // サーバーと連携したら、サーバーからデータを取得する
    // reservedGuests.addFakeData();
    reservedGuests.addData();
  }

  render() {
    const { defaultTimeStart, defaultTimeEnd } = this.state;
    const { groups, items, inputGroupTitleAndTime } = this.props.reservedGuests;

    return (
      <Timeline
        groups={groups}
        items={items}
        keys={keys}
        sidebarContent={<div>Check-In Plans</div>}
        itemsSorted
        itemTouchSendsClick={false}
        stackItems
        itemHeightRatio={0.75}
        showCursorLine
        canMove={false}
        canResize={false}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        onCanvasClick={inputGroupTitleAndTime}
      />
    )
  }
}
