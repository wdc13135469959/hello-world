
import React, {Component} from 'react';
import './common.css';


export default class SalaryIncrease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="increaseItem" onClick={()=>this.props.showMask(this.props.reward)} style={{background:this.props.color}}>
                <div className="name">{this.props.reward.name}</div>
                <div className="name1" >+{this.props.reward.score} </div>
            </div>
        );
    }


}



