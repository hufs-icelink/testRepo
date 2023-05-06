function FindPW() {
  return (
    <form>
      <input id="userID" placeholder="ID" type="text" />
      <br />
      <input id="email" placeholder="Email" type="email" />
      <button id="sendNumBtn">인증번호 보내기</button>
    </form>
  );
}

export default FindPW;
