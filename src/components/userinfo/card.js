import React, { Component }   from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'antd';

import 'antd/dist/antd.css';
import './cards.css';


class Cards extends Component {
	render() {
		return (
            <>
                <div className="site-card-border-less-wrapper">
                  <Card title={this.props.userinfo.real_name} bordered={true} style={{ width: 300 }}>
                    <p>Employee id:- {this.props.userinfo.id}</p>
                    <p>Location:- {this.props.userinfo.tz}</p>
                  </Card>
                </div>
            </>
        );
    }
}

export default Cards;
