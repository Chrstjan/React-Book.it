import { Wrapper } from "../components/Wrapper/Wrapper";
import { Month } from "../components/Month/Month";

export const LandingPage = () => {
  const handleMonthClick = () => {
    console.log("lol");
  };
  return (
    <>
      <Wrapper>
        <Month text="Jan" action={() => handleMonthClick()} />
      </Wrapper>
    </>
  );
};
