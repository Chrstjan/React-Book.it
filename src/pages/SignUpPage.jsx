import { SignUpForm } from "../components/SignupForm/SignUpForm";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const SignUpPage = () => {
  return (
    <Wrapper>
      <SignUpForm
        headerText="Welcome"
        subText="We are thrilled to have on board. Now we just need to get to know you a little"
      />
    </Wrapper>
  );
};
