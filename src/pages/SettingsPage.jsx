import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { UserAccount } from "../components/UserAccount/UserAccount";
import { PageHeader } from "../components/PageHeader/PageHeader";

export const SettingsPage = () => {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <PageHeader headerText="Settings" />
      {user?.accessToken ? <UserAccount userData={user} /> : null}
    </Wrapper>
  );
};
