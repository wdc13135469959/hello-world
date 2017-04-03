/**
 * Created by Administrator on 2017/3/14 0014.
 */

import React, {Component} from 'react';
import './common.css';


export default class Mask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.showMask.type)
        return (
            <div style={{display:this.props.showMask==false?"none":"block"}}>
            <div className="mask"></div>
            <div className="confirm">
                <div className="confirm-inner">
                    <div className="inner-top">
                        <label>
                            {this.props.showMask.type==1? "奖励加薪项目":"惩罚减薪项目"}

                        </label><br/>
                        <label style={{fontSize:"12px"}}>Incentive pay program</label>
                    </div>
                    <div className="inner" onClick={()=>this.props.showMask(this.props.reward)}>
                        <div className="name5">{this.props.showMask.name}</div>
                        <div className="name6">{this.props.showMask.score}</div>
                    </div>
                    <label className="remove" onClick={this.props.cancelMask}>取消</label>
                    <label className="ensure" onClick={()=>this.props.changeScore(this.props.showMask)}>确定</label>
                </div>
            </div>
                </div>
        );
    }


}


