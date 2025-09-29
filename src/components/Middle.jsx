import Central from "./Central";
import "../styles/Middle.css";
import TopBar from "./TopBar";
import RightSide from "./RightSide";

export default function Middle() {
  return (
    <>
      <div className="middle-container">
        <TopBar />
        <div className="data-containers">
          <Central />
          <RightSide />
        </div>
      </div>
    </>
  );
}
