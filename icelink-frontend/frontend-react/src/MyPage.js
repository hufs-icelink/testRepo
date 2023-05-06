import React from "react";
function MyPage(props) {
  return (
    <div>
      <div style={{ height: "500px", float: "left" , marginLeft:"5%"}}>
        <h2>personal portfolio</h2>
        <h3> junjoy</h3>
        <h3> dream : product manager</h3>
        <h3> stack : python </h3>
        <br />
        <address>
          <a href="https://github.com/mmmjunjoy">
            <h3> - github -</h3>
          </a>
          <a href="https://velog.io/@sjb2010">
            <h3>- blog -</h3>
          </a>
          <br />
        </address>
        <section style={{ border: "5px solid gainsboro" }}>
          <h3> project summary</h3>
        </section>
        <section style={{ border: "5px solid gainsboro" }}>
          <h3> dacon : 모델 성능 높이기 대회 진행중</h3>
          <h3> icelink : frontend 제작 진행중 </h3>
        </section>
      </div>
      <div
        style={{
          float: "center",
          marginLeft: "430px",
          marginRight: "400px",
          marginTop: "50px",
          border: "10px solid gray",
        }}
      >
        <center>
          <h1> my short introduce</h1>
        </center>
      </div>
      <div
        style={{
          float: "center",
          marginTop: "50px",
          marginLeft: "430px",
          marginRight: "400px",
          border: "5px solid rgb(39, 26, 12)",
        }}
      >
        <center>
          <h2 style={{ marginLeft: "10px" }}>
            {" "}
            -- 이 부분이 사용자 입장에서 자유롭게 서술하는 부분--
          </h2>
        </center>
        <h3 style={{ marginLeft: "10px" }}>
          {" "}
          안녕하세요 , 저는 한국외국어대학교를 재학중인 심준보입니다.
        </h3>
        <h3 style={{ marginLeft: "10px" }}>
          {" "}
          저의 꿈은 product manager이며 , 이를 위해 다양한 분야를 경험중입니다.
        </h3>
        <h3 style={{ marginLeft: "10px" }}>
          {" "}
          현재 , 주는 backend영역을 공부중이며 , 부가적인 요소로 ai 분야와
          frontend 및 데이터 전처리를 학습하고 있습니다.
        </h3>
      </div>
      <div
        style={{
          float: "center",
          marginTop: "50px",
          marginLeft: "430px",
          marginRight: "400px",
          border: "10px solid gray",
        }}
      >
        <center>
          <h1> my main introduce</h1>
        </center>
      </div>
      <div
        style={{
          float: "center",
          marginTop: "5px",
          marginLeft: "430px",
          marginRight: "400px",
          border: "5px solid rgb(39, 26, 12)",
        }}
      >
        <center>
          <h2 style={{ marginLeft: "10px" }}>
            {" "}
            -- 이 부분이 크롤링한 데이터를 이용하여 종합해주는 부분--
          </h2>
        </center>
        <h2 style={{ marginLeft: "10px" }}> stack : python , java , c</h2>
        <h2 style={{ marginLeft: "10px" }}>
          {" "}
          interesting : ai , data processing , frontend , backend
        </h2>
        <h2 style={{ marginLeft: "10px" }}>
          {" "}
          project : develope icelink platform , greenwashing detect service{" "}
        </h2>
      </div>
    </div>
  );
}

export default MyPage;
