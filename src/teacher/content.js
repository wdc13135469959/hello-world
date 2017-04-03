import React, {Component} from 'react';
import './common.css';
import Set from './xuesheng.png'



export default class Content extends Component {
    constructor(props) {
        super(props);

    }
    render(){
        return(
        <div className="tittle">
            <div className="aaa">
                <img src={Set} style={{marginTop:"10px",marginLeft:"10px"}}/>
            <div style={{position:"absolute",left:"35px",top:"10px"}}>学生管理  School management</div>
            </div>

        </div>
        )
    }
}