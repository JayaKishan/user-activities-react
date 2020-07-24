import React, { Component }   from 'react';
import ReactDOM from 'react-dom';
import { Timeline, Col } from 'antd';

import 'antd/dist/antd.css';


class Activities extends Component {
	render() {
		return (
            <>
                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Timeline>
                    <Timeline.Item>{this.props.activities.start_time}</Timeline.Item>
                    <Timeline.Item  color="green">{this.props.activities.end_time}</Timeline.Item>
                  </Timeline>
                </Col>
            </>
        );
    }
}

export default Activities;
