import ChatSvg from "../../assets/ui/ChatSvg";
import ColorTheme from "../../assets/ui/ColorTheme";
import ComponentsSvg from "../../assets/ui/ComponentsSvg";
import DarkSvg from "../../assets/ui/DarkSvg";
import HomeSvg from "../../assets/ui/HomeSvg";
import LogoutSvg from "../../assets/ui/LogoutSvg";
import ProfileSvg from "../../assets/ui/ProfileSvg";
import UserImage from "../../assets/images/avatar/5.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideBar({ on, setOn }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`dark-overlay ${on || "active"}`}
        onClick={() => setOn(!on)}
      ></div>
      <div
        className={`sidebar fixed inset-y-0 left-0 w-[260px] z-[999999] transition-all duration-500 ${
          !on ? "flex" : "hidden"
        } flex-col overflow-y-scroll bg-white`}
        onClick={() => setOn(!on)}
      >
        <div className="author-box flex items-center bg-primary p-5 ">
          <div className="dz-media border-2 border-white w-40 h-12 overflow-hidden rounded-md mr-3">
            <img src={UserImage} alt="" />
          </div>
          <div className="dz-info">
            <h5 className="name text-white mb-0 font-bold">James Hawkins</h5>
            <span className="text-white text-sm">jameshawkins@mail.com</span>
          </div>
        </div>

        <ul className=" p-4 mb-7">
          <li className="nav-label uppercase text-sm font-semibold text-black ">
            Main Menu
          </li>

          <li>
            <Link to={"/"}
              className="nav-link flex items-center text-black py-2"
              href="index.html"
            >
              <span className="dz-icon mr-2">
                <HomeSvg />
              </span>
              <span>Home</span>
            </Link>
          </li>

          <li>
            <a
              className="nav-link flex items-center text-black py-2"
              href="ui-components.html"
            >
              <span className="dz-icon mr-2">
                <ComponentsSvg />
              </span>
              <span>Components</span>
            </a>
          </li>

          <li>
            <Link to={'/profile'}
              className="nav-link flex items-center text-black py-2"
              href="account.html"
            >
              <span className="dz-icon mr-2">
                <ProfileSvg />
              </span>
              <span>Profile</span>
            </Link>
          </li>

          <li>
            <a
              className="nav-link flex items-center text-black py-2 relative"
              href="chat.html"
            >
              <span className="dz-icon mr-2">
                <ChatSvg />
              </span>
              <span>Chat</span>
              <span className="badge bg-info text-white absolute top-0 right-0 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </a>
          </li>

          <li>
            <a
              className="nav-link flex items-center text-black py-2"
              href="welcome.html"
            >
              <span className="dz-icon mr-2">
                <LogoutSvg />
              </span>
              <span>Logout</span>
            </a>
          </li>

          <li className="nav-label uppercase text-sm font-semibold text-black border-t border-[var(--border-color)] pt-5 mt-5">
            Settings
          </li>

          <li
            className="nav-color"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            <a
              href="javascript:void(0);"
              className="nav-link flex items-center text-black py-2"
            >
              <span className="dz-icon mr-2">
                <ColorTheme />
              </span>
              <span>Color Theme</span>
            </a>
          </li>

          <li className="mode flex items-center justify-between py-2">
            <div className="flex items-center">
              <span className="dz-icon mr-2">
                <DarkSvg />
              </span>
              <span className="text-dark text-black">Dark Mode</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="toggle-dark-menu"
                className="hidden peer"
              />
              <label
                onClick={() => setToggle(!toggle)}
                for="toggle-dark-menu"
                className="relative w-10 h-5 bg-gray-300 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-primary"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                    toggle && "translate-x-5"
                  }`}
                ></span>
              </label>
            </div>
          </li>
        </ul>
        <div className="sidebar-bottom mt-auto p-5">
          <h6 className="name mb-2 text-black">W3Meat - Meat Shop Mobile App</h6>
          <span className="ver-info text-sm text-black">App Version 1.0</span>
        </div>
      </div>
    </>
  );
}

export default SideBar;
