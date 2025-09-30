import "../styles/TopBar.css";
import { FaSearch } from "react-icons/fa";
import NotificationIcons from "./NotificationIcons";
import Profile from "./Profile";

export default function TopBar() {
  return (
    <>
      <div className="topbar-container">
        <div className="search-bar">
            <div className="top-input">
                <input id="searchbox" className="searchbox" />
            </div>
            <div className="search-icon dflx aic jcc">
                <FaSearch size={20} />
            </div>
        </div>
        <div></div>
        <div className="">
            <NotificationIcons />
        </div>
        <div className="">
            <Profile />
        </div>
      </div>
    </>
  );
}
