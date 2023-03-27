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
        <Header /> <br />
      </BrowserRouter>
    );
  }
}

export default App;
