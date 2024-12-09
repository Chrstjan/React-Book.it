import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
