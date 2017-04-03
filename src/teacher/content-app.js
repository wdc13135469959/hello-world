import React,{Component} from 'react';
import './common.css';

export default class ContentApp extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                {
                    this.props.students.map((obj,index)=>{
                        return <div className="xuesheng">
                            {
                            obj.sname
                            }
                        </div>
                    })
                }
            </div>
        )

    }
}
