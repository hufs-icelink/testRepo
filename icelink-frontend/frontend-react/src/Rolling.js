/*
import React, {Component} from "react";
import "./style/GatherRoll.css";

function Rolling() {
    state = {
         names: [
            "웹사이트 프론트엔드 개발자 구해요", 
             "앱 프론트엔드 개발자 있나요?", 
            "공모전 같이 나가실 분", 
            "대외활동 이런게 있네요?", 
            "버스 태워드립니다."],
        current: 0
    };
    
    increaseIndex = () => {
        this.setState(
            {current : this.state.current==this.state.names.length-1
            ?this.state.current=0
            :this.state.current+1}
        );
    }
    
    componentDidMount = () => {
        setInterval(() => {
            this.increaseIndex();
        }, 2000);
      }
    
    return (
        {state.names[this.state.current]}
    );
    }
export default Rolling;
*/
