import { LoginForm } from "../components/LoginForm/LoginForm";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const SignInPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Sign in" />
      <LoginForm
        headerText="Welcome"
        subText="To use this app please sign in"
      />
    </Wrapper>
  );
};
