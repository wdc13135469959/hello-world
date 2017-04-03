
import React, {Component} from 'react';
import './common.css';


export default class Salarydecrease extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="decreaseItem" onClick={()=>this.props.showMask(this.props.reward)}>
                <div className="name3">
                    {this.props.reward.score}
                </div>
                <div className="name3-inner">
                    {/*{this.props.reward.score}*/}
                </div>
                <div className="name4">
                    {this.props.reward.name}
                </div>
            </div>
        );
    }


}







