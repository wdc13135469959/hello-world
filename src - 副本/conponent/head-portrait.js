import React, {Component} from 'react';
import './common.css';
import Head from './head.png';

export default class HeadPortrait extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="head-portrait-box">
                <img src={this.props.src} style={{width:"100%",height:"100%"}}/>
                <div className="Mask">
                    <div className="head-portrait-inner">
                        <div className="head-inner-por">
                            <img src={Head} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
                        </div>
                    </div>
                    <div className="connt">
                        <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"14px"}}>WEB1503B</label><br/>
                        <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"14px"}}>人数：29人 </label><br/>
                        <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"14px"}}> 总额：33000元</label><br/>
                        <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"14px"}}>2017年2月16日</label>
                    </div>
                </div>
            </div>
        );
}
}
