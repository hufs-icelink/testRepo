import profileimg from "../img/jjanggu.jpg";
import "../style/MiniProfile.css";

function Miniprofile() {
  let name = sessionStorage.getItem("name");
  return <div>{name === null ? outLog() : onLog()}</div>;
}

const onLog = () => {
  const name = sessionStorage.getItem("name");
  return (
    <div className="profile-container-on">
      <div className="profile-img">
        <img id="image" src={profileimg} height="200" />
      </div>
      <div className="profile-name">{name}</div>
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
};

const outLog = () => {
  return (
    <div className="profile-container-out">
      <div className="profile-img">
        <img id="image" src={profileimg} height="200" />
      </div>
      <div className="profile-name">GUEST</div>
    </div>
  );
};

export default Miniprofile;
