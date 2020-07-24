import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Calendar, Badge } from 'antd';

import 'antd/dist/antd.css';
import './calendar.css';


function getListData(value) {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'warning', content: 'Feb 1 2020  1:33PM.' },
        { type: 'success', content: 'Feb 1 2020 1:54PM.' },
      ];
      break;
    case 1:
      listData = [
        { type: 'warning', content: 'Mar 1 2020  11:11AM.' },
        { type: 'success', content: 'Mar 1 2020  11:11AM.' },
      ];
      break;
    case 16:
      listData = [
        { type: 'warning', content: 'Mar 16 2020  5:33PM' },
        { type: 'success', content: 'Mar 16 2020 8:02PM' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backloog number</span>
    </div>
  ) : null;
}

function DetailsInCalendar(props) {
  const userId = props.userId;
  console.log('insiddsfdeCal', userId)
  return (
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
  );
}

export default DetailsInCalendar;
