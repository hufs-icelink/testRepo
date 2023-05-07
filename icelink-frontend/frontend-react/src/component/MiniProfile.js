import profileimg from "../img/jjanggu.jpg";
import "../style/MiniProfile.css";

function Miniprofile() {
  return (
    <div class="profile-container">
      <div class="profile-img">
        <img id="image" src={profileimg} height="200" />
      </div>
      <div class="profile-name">junjoy</div>
      <div class="profile-info">
        <div id="myDream">
          [ dream ]
          <br />
          product manager
        </div>
        <div id="myStack">
          [ stack ]
          <br />
          python{" "}
        </div>
      </div>
    </div>
  );
}

export default Miniprofile;
