import React from "react";
import "./List.css";

function Gathering(props) {
  return (
    <div class="showBoard">
    <div class="write gat1">
        <div class="sign gatherSign">모집중</div>
        <div class="title">[웹 개발] 프론트엔드/백엔드 개발 관심있는 분</div>
        <div class="content">[내용] 혹시 이 공모전에 관심있으신 프론트엔드/백엔드 개발자 분 계실까요?...</div>
        <div class="moreButton">더보기</div>
    </div>
    <div class="write gat2">
        <div class="sign gatherSign">모집중</div>
        <div class="title">[앱 개발] 안드로이드 앱 개발합시다!</div>
        <div class="content">[내용] 좋은 공모전 있어서 올립니다. 같이 참여하실 분 있으신가요?</div>
        <div class="moreButton">더보기</div>
    </div>
    <div class="write gat3">
        <div class="sign gatherSign">모집중</div>
        <div class="title">[웹 개발] 머신러닝 관련 웹 페이지 개발 공모전</div>
        <div class="content">[내용] 머신러닝에 관심있으시고 웹 페이지 개발 경험 있으신분!</div>
        <div class="moreButton">더보기</div>
    </div>
</div>
  );
}

export default Gathering;
