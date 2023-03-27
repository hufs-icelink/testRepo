import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Header from "./Header";
import myPage from "./MyPage";
import Board from "./Board";
import SignIn from "./SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header /> 
        <br />
      </BrowserRouter>
    );
  }
  
}


/**
 * 
 *  import React, {useEffect, useState} from 'react';
import axios from 'axios';
function app() {
    const [hello, setHello] = useState('')
 
    useEffect(() => {
          axios.get('http://localhost:1819/api/no')
          .then(response => setHello(response.data))
          .catch(error => console.log(error))
      }, []);
     
      console.log(hello);
      return (
          <div>
              백엔드에서 가져온 데이터입니다 : {hello}
          </div>
      );

}
 * 추가한 코드 - 호영
 *  */ 


export default App;
