import { useState } from "react";
import { Icon } from "../Icon/Icon";
import s from "./Sidebar.module.scss";
import { Link } from "react-router-dom";

export const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${isMenuOpen ? s.sidebarStyling : s.hideSidebar} ${
        isOpen ? s.openStyling : ""
      }`}
    >
      {isMenuOpen ? (
        <p
          className={s.closeButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          X
        </p>
      ) : null}
      <span>
        <span onClick={() => openSidebar()} className={s.iconWrapper}>
          {isOpen ? <p>Close</p> : null}
          <Icon src="./Next page.svg" type={isOpen ? "flip" : ""} />
        </span>
        <hr />
      </span>
      <span className={s.sidebarIcons}>
        <span className={s.iconWrapper}>
          {isOpen ? <p>Home</p> : null}
          <Link to="/">
            <Icon src="./Home.svg" />
          </Link>
        </span>
        <span className={s.iconWrapper}>
          {isOpen ? <p>Add event</p> : null}
          <Icon src="./Plus.svg" />
        </span>
        <span className={s.iconWrapper}>
          {isOpen ? <p>Settings</p> : null}
          <Icon src="./Settings.svg" />
        </span>
      </span>
      <span className={s.sidebarProfile}>
        <span className={isOpen ? s.iconWrapper : ""}>
          {isOpen ? <p>Profile</p> : null}
          <Link to="/signin">
            <Icon src="./Test Account.svg" />
          </Link>
        </span>
      </span>
    </div>
  );
};
