import { useState } from "react";
import { Icon } from "../Icon/Icon";
import s from "./Sidebar.module.scss";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${s.sidebarStyling} ${isOpen ? s.openStyling : ""}`}>
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
          <Icon src="./Home.svg" />
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
          <Icon src="./Test Account.svg" />
        </span>
      </span>
    </div>
  );
};
