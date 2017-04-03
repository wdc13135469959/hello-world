/**
 * Created by Administrator on 2017/3/13 0013.
 */
import React, {Component} from 'react';
import './common.css';
import SelectItem from './select-item';
import HeadPortrait from './head-portrait';
import Img from './img.png';

export default class leftSelect extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="left-box">
                <HeadPortrait src={Img}/>
                {this.props.students.map((obj,index)=>{

                        return  <SelectItem student={obj}
                                            key={index}   
                                            changeIndex={this.props.changeIndex}
                                            index={index}
                                            clickedStudent={this.props.clickedStudent}/>

                    })
                }
            </div>
        );
    }


}


