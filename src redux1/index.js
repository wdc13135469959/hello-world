import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import { Router, Route, hashHistory } from 'react-router';
import {createStore} from 'redux'
import todo from './reducers';

let store = createStore(todo);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);



// dispatch(beforeGetTeacherAllData());
// console.log(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`)
// fetch(`${this.state.url}/cms/login/login.do?roleName=${username}&password=${password}&roleType=1&officeType=${college}`,
//     {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         }
//
//     })
//     .then(response => response.json())
//     .then(json => {
//
//         if (json.status == 201) {
//             localStorage.clear();
//             alert("用户名或密码错误")
//         } else {
//
//             dispatch(GetTeacherAllData(json));
//             // if(authority==3){
//             //     dispatch(studentType("学生入口"))
//             // }
//             this.saveLocation(username, password, authority, college);
//             hashHistory.push("/classManager");
//         }
//     })
//     .catch(err=> {
//         localStorage.clear();
//         alert("服务器异常")
//     });
//   redux-react  示例
