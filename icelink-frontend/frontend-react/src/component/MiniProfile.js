import profileimg from "../img/jjanggu.jpg";
import "../style/MiniProfile.css";

function Miniprofile() {
  return (
    <div class="profile-container">
      <div class="profile">
        <img id="image" src={profileimg} height="200" />
      </div>
      <p>김정통</p>
    </div>
  );
}

export default Miniprofile;
