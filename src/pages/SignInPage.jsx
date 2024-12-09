import { LoginForm } from "../components/LoginForm/LoginForm";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const SignInPage = () => {
  return (
    <Wrapper>
      <LoginForm
        headerText="Welcome"
        subText="To use this app please sign in"
      />
    </Wrapper>
  );
};
