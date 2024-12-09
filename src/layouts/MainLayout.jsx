import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icon/Icon";
import { Time } from "../components/Time/Time";

export const MainLayout = () => {
  return (
    <>
      <Header>
        <Icon src="./Test Account.svg" />
        <Icon src="Alarm.svg" />
        <Icon src="Clock.svg" />
        <Time />
      </Header>
      <Sidebar />
      <Outlet />
    </>
  );
};
