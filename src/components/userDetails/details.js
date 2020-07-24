import React, { Component }   from 'react';
import ReactDOM from 'react-dom';
import DetailsInCalendar from '../calendar/calendar'
import Cards from '../userinfo/card'
import Activities from '../timeactivities/activities'
import { Tabs, Row } from 'antd';
import userData from '../api/data.json';

import 'antd/dist/antd.css';

const { TabPane } = Tabs;
const userName = userData.members;

function callback(key) {
  console.log(key);
}

class Details extends Component {
	render() {
    const userId = this.props.userid;
		return (
            <>
              <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Deatils" key="1">
                  {userData.ok ?
                            <ul>
                              {userName.map(user =>
                                {
                                  return user.id === userId
                                                     ? <>
                                                          <Cards userinfo={user}/>
                                                          <br/>
                                                          <Row>
                                                            {user.activity_periods.map(details => (
                                                              <Activities activities={details}/>
                                                            )
                                                            )}
                                                          </Row>
                                                        </>
                                                     : ''
                                }
                              )}
                            </ul>
                           :
                           <p>This person has no activities</p>}
                </TabPane>
                <TabPane tab="Show in calender" key="2">
                  <DetailsInCalendar userId={userId}/>
                </TabPane>
              </Tabs>
            </>
        );
    }
}

export default Details;
