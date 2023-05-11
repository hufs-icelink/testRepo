import React from "react";
import firstimg from "./img/intro_1.PNG";
import simimg from "./img/member/sim.png";
import jungimg from "./img/member/jung.png";
import rhoimg from "./img/member/rho.png";
import leeimg from "./img/member/lee.png";

import "./style/Intro.css";

function Intro() {
  return (
    <div>
      <div class="top-container">
        <div class="introduction-container">
          <div class="introduction">
            <div id="intro-write">
              <p>
                Are you ready to feel
                <br />
                the connected experience
                <br />
                of floating in the sky?
              </p>
            </div>
            <div id="intro-write2">
              <p>주니어 개발자와 스타트업을 이어주기 위해 시작했습니다.</p>
            </div>
          </div>
          <img class="intro-first" src={firstimg} />
        </div>
        <div class="teammem-container">
          <div class="member-write">
            <p>ICELINK 소개</p>
          </div>
          <div class="member-name">[ Team Member ]</div>
          <div class="member-intro">
            <div class="member-setup" id="sim">
              <p id="name">심 준보</p>
              <p id="role">PM & FRONTEND</p>
              <img class="memimg" id="img-sim" src={simimg} />
            </div>
            <div class="member-setup" id="jung">
              <p id="name">정 호영</p>
              <p id="role">BACKEND</p>
              <img class="memimg" id="img-jung" src={jungimg} />
            </div>
            <div class="member-setup" id="rho">
              <p id="name">노 현아</p>
              <p id="role">FRONTEND</p>
              <img class="memimg" id="img-rho" src={rhoimg} />
            </div>
            <div class="member-setup" id="lee">
              <p id="name">이 윤빈</p>
              <p id="role">BACKEND</p>
              <img class="memimg" id="img-lee" src={leeimg} />
            </div>
          </div>
        </div>
        <div class="nothing-container"></div>
      </div>
    </div>
  );
}
export default Intro;
