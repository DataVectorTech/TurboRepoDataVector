import React, { useEffect } from "react";
import "./Navbar.css";
import Notification from "./Notification";

type Props = {
    showNotifications: boolean;
    toggledNotifications: () => void;
}


const Notifictions: React.FC<Props> = ({showNotifications, toggledNotifications}) => {

    const closeNotifications = (e) => {
        e.stopPropagation();
        toggledNotifications();
    }

  useEffect(() => {
    const prevOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <>
    <div className="notifContainer"  onClick={(e) => closeNotifications(e)}>
        <div className="notifMain">
          <div className="notificationsDiv rounded-b-lg">
            <div className="font-sans text-left font-medium text-[16px] text-darkGray mb-2 px-4">
              {"Notifictions"}
            </div>
            <div className="divide-y divide-lightGray">
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </div>
          </div>
        </div>
    </div>
    </>
  );
};

export default Notifictions;
