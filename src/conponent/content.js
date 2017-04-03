import React, {Component} from 'react';
import './common.css';
import Score from './score'
import Title from './title'
import SalaryIncrease from './salary_increase';
import Salarydecrease from './salary_decrease';
import Classify from './classify.png';
import Punish from './punish.png';

export default class Content extends Component {
    constructor(props) {
        super(props);

    }


    render() {
               // console.log(this.props.showMask)
        return (
            <div className="content-box">
                <div className="content-inner-box">
                    <Score score={this.props.student.score}/>
                    <Title name="奖励加薪项目" bgColor="#eed63b" color="#000" src={Classify}/>
                    <div className="increase-box">
                        {this.props.rewards.map((obj,index)=>{
                                if(obj.type==1){
                                return <SalaryIncrease reward={obj}
                                                       key={index}
                                                       index={index}
                                                       color={this.props.colors[index]}
                                                       showMask={this.props.showMask}/>}})
                        }

                    </div>
                    <Title name="惩罚减薪项目" bgColor="#554D13" color="#fff" src={Punish}/>
                    <div className="decrease-box">
                        {this.props.rewards.map((obj,index)=>{
                            if(obj.type==2){
                                return <Salarydecrease reward={obj}
                                                       key={index}
                                                       showMask={this.props.showMask}/>}})
                        }
                    </div>
                </div>
            </div>
        );
    }


}


