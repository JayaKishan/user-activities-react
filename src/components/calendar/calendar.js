import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Calendar, Badge } from 'antd';

import 'antd/dist/antd.css';
import './calendar.css';

import userData from '../api/data.json';

const userName = userData.members;

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 1:
      listData = [
        { type: 'warning', content: '1:33PM.' },
        { type: 'success', content: '1:54PM.' },
      ];
      break;
    case 1:
      listData = [
        { type: 'warning', content: '11:11AM.' },
        { type: 'success', content: '11:11AM.' },
      ];
      break;
    case 16:
      listData = [
        { type: 'warning', content: '5:33PM' },
        { type: 'success', content: '8:02PM' },
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


class DetailsInCalendar extends Component {
	render() {
    const userId = this.props.userId;
		return (
                  userData.ok ?
                            <ul>
                              {userName.map(user =>
                                {
                                  return user.id === userId
                                                     ? <>
                                                          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                                                        </>
                                                     : ''
                                }
                              )}
                            </ul>
                           :
                           <p>This person has no activities</p>
        );
    }
}


export default DetailsInCalendar;
