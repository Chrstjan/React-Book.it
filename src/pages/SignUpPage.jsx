import { PageHeader } from "../components/PageHeader/PageHeader";
import { SignUpForm } from "../components/SignupForm/SignUpForm";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const SignUpPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Sign up" />
      <SignUpForm
        headerText="Welcome"
        subText="We are thrilled to have on board. Now we just need to get to know you a little"
      />
    </Wrapper>
  );
};
