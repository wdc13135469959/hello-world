import React, {Component} from 'react';
import './common.css';
import set from './set.png'

export default class Head1 extends Component {
    constructor(props) {
        super(props);
        this.whitchCourse = this.whitchCourse.bind(this);
    }

    whitchCourse() {
        let aa;
        this.props.courseList.map((obj, index)=> {
            if (obj.cname == this.props.grade.course) {
                aa =<label style={{color:"#fff",fontSize:"12px"}}>第{index+1}门课程</label>
            }
        }, this);
        

        return aa
    }

    render() {
    console.log(this.props)
        let time = new Date().getYear() + 1900+"年";
        return (
            <div className="head-box">
                <div className="head-inner-box">
                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"20px",marginRight:"65px"}}>数字媒体学院</label>
                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"12px",marginRight:"15px"}}>{time}</label>
                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"12px",marginRight:"45px"}}>
                        {this.props.grade.name}
                    </label>
                    {this.whitchCourse()}
                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"10px",marginLeft:"395px"}}>任课老师：</label>

                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"12px",marginRight:"45px"}}>
                        {this.props.grade.teacher}
                    </label>
                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"10px",marginLeft:"100px"}}>班主任：</label>
                    <label style={{color:"#fff",fontFamily:"微软雅黑",fontSize:"12px",marginRight:"45px"}}>
                        {this.props.grade.header}
                    </label>
                    <img src={set} style={{width:"21px",height:"25px",position:"absolute",top:"25px",right:"40px"}}/>
                </div>
            </div>
        );
    }


}


