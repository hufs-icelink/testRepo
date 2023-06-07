import React from "react";

function SignOut() {
  sessionStorage.clear();
  alert("로그아웃 되었습니다.");
  window.location.replace("/");
}

export default SignOut;
