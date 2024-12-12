import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icon/Icon";
import { Time } from "../components/Time/Time";
import { Burgermenu } from "../components/Burgermenu/Burgermenu";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const ProtectedLayout = () => {
  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!user || !user.id) {
    return <Navigate to="/" redirect />;
  }

  return (
    <>
      <Header>
        <Link to="/signin">
          <Icon src="./Test Account.svg" type="acountLink" />
        </Link>
        <Icon src="Alarm.svg" type="acountLink" />
        <Icon src="Clock.svg" type="acountLink" />
        <Time />
      </Header>
      <Burgermenu setIsMenuOpen={setIsMenuOpen} />
      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Outlet />
    </>
  );
};
