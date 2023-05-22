import profileimg from "../img/jjanggu.jpg";
import "../style/MiniProfile.css";

function Miniprofile() {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img id="image" src={profileimg} height="200" />
      </div>
      <div className="profile-name">junjoy</div>
      <div className="profile-info">
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
