import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Notifictions from "./Notfications";

const Navbar: React.FC = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);

  const toggledNotifications = () => {
    setShowNotifications(prev => !prev);
  }

  return (
    <div className="w-full mt-0 mx-auto border-b border-b-primary h-[102px] shadow-lg z-10 sticky top-0 bg-bgWhite">
      <div className="max-w-[1440px] mt-0 mx-auto p-[14px] relative">
        <div className="m-auto w-full flex flex-row justify-between items-center">
          {/* logo */}
          <div className="w-[74px] h-[74px] cursor-pointer">
            <Link to="#">
              <img
                className="object-contain"
                src="/assets/images/2Xcell_logo.png"
                alt="2xcell-logo"
              />
            </Link>
          </div>

          {/* input */}
          {/* <div className="w-[636px] h-[52px] flex items-center rounded-[50px] bg-bgGray">
            <span className="inline-block ml-3 mr-1 text-center h-[26px]">
              <img
                className="object-contain w-[26px] h-[26px]"
                src="/assets/icons/search.svg"
                alt="search"
              />
            </span>
            <input
              className="search-input"
              type="text"
              placeholder="Search Here..."
              required
            />
          </div> */}

          {/* notification icon */}
          <div className="rounded-full border border-primary bg-secondary w-[52px] h-[52px] shadow-xl flex items-center justify-center cursor-pointer" onClick={toggledNotifications}>
            <div className="relative">
              <img src="/assets/icons/bell-icon.svg" alt="notification" />
              <span className="inline-block absolute top-0 right-0 bg-red w-[10px] h-[10px] rounded-full"></span>
            </div>
          </div>
        </div>
        {
          showNotifications && (
            <Notifictions showNotifications={showNotifications} toggledNotifications={toggledNotifications} />
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
