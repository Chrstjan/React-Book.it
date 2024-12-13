import { Routes, Route } from "react-router-dom";
import { Paths } from "./Paths";
import { MainLayout } from "../Layouts/MainLayout";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { LandingPage } from "../pages/LandingPage";
import { PageNotFound } from "../pages/PageNotFound";
import { SignUpPage } from "../pages/SignUpPage";
import { SignInPage } from "../pages/SignInPage";
import { AddEventPage } from "../pages/AddEventPage";
import { EditEventPage } from "../pages/EditEventPage";
import { SettingsPage } from "../pages/SettingsPage";

export const PageRouter = () => {
  return (
    <Routes>
      <Route path={Paths.home} element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path={Paths.signUp} element={<SignUpPage />} />
        <Route path={Paths.signIn} element={<SignInPage />} />
        <Route path={Paths.pageNotFound} element={<PageNotFound />} />
      </Route>
      <Route path={Paths.home} element={<ProtectedLayout />}>
        <Route path={Paths.addEvent} element={<AddEventPage />} />
        <Route path={Paths.editEvent} element={<EditEventPage />} />
        <Route path={Paths.settings} element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};
