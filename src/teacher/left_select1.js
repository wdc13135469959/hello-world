/**
 * Created by Administrator on 2017/3/13 0013.
 */
import React, {Component} from 'react';
import './common.css';

import HeadPortrait from './head-portrait';
import Img from './img.png';

export default class LeftSelect1 extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="left-box">
                <HeadPortrait src={Img}/>
                <div className="box">
                    学生管理
                </div>
            </div>
        );
    }
    }