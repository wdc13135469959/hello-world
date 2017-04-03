import React, {Component} from 'react';

import './App.css';
import Left from './left';
import Right from './right';
import {connect} from 'react-redux';


class App extends Component {
    constructor(props){
        super(props);
        // this.add=this.add.bind(this);
        // this.minus=this.minus.bind(this);
        // this.state={
        //     value:0
        // }
    }
    render() {
      console.log(this.props);
        return (
            <div className="App">
                <Left add={this.props.onAdd}
                      minus={this.props.onMinus}/>
                <Right value={this.props.value}/>
            </div>
        );
    }

}
function todo(state) {

    return {
        value:state.culculator
    }
}

const mapDispatchToProps = {
    onAdd: (text) => {

        return{
            type: 'add',
            text
        }
    },
    onMinus: (text) => {
 
        return{
            type: 'minus',
            text
        }
    }
};

export default connect(todo,mapDispatchToProps)(App);

