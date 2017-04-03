/**
 * Created by Administrator on 2017/3/14 0014.
 */
/**
 * Created by Administrator on 2017/3/13 0013.
 */
import React, {Component} from 'react';
import './common.css';


export default class selectItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="selectItem" onClick={()=>this.props.changeIndex(this.props.index)}
            style={{backgroundColor:this.props.clickedStudent==this.props.index?"#eed63b":"",
                color:this.props.clickedStudent==this.props.index?"#000":""}}>
                {this.props.student.sname}
            </div>
        );
    }


}


