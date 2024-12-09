import { Link, Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icon/Icon";
import { Time } from "../components/Time/Time";
import { Burgermenu } from "../components/Burgermenu/Burgermenu";
import { useState } from "react";

export const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header>
        <Link to="/signin">
          <Icon src="./Test Account.svg" type="acountLink" />
        </Link>
        <Icon src="Alarm.svg" />
        <Icon src="Clock.svg" />
        <Time />
      </Header>
      <Burgermenu setIsMenuOpen={setIsMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Outlet />
    </>
  );
};
