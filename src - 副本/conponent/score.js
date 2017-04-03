
import React, {Component} from 'react';
import './common.css';
import money from './money.png'
import xiuxue from './xiuxue.png'


export default class Score extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="score" style={{ position: "relative"}}>
                <img src={money} style={{width:"58px",height:"58px",verticalAlign: "middle",marginLeft:"260px"}}/>
                    <label style={{color:"#363636",fontFamily:"微软雅黑",fontSize:"30px",marginRight:"40px",marginLeft:"25px"}}>
                        本教学周期薪酬
                    </label>
                {this.props.score}
                <img className="xiuxue" src={xiuxue}/>
            </div>
        );
    }


}


