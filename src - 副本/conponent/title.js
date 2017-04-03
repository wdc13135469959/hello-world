
import React, {Component} from 'react';
import './common.css';



export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="title" style={{backgroundColor:this.props.bgColor,color:this.props.color}}>
                <img src={this.props.src} style={{verticalAlign:"middle",marginRight:"10px"}}/>
                {this.props.name}
                <label style={{color:"#363636",fontFamily:"微软雅黑",fontSize:"14px",marginLeft:"10px"}}>Incentive pay program</label>
            </div>

        );
    }


}



