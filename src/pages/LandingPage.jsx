import { Wrapper } from "../components/Wrapper/Wrapper";
import { Month } from "../components/Month/Month";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LandingPage = () => {
  const { user } = useContext(UserContext);

  const handleMonthClick = () => {
    console.log("lol");
  };
  return (
    <>
      <Wrapper>
        {user?.name ? (
          <h2>Welcome back {user?.name}</h2>
        ) : (
          <h2>Welcome Guest</h2>
        )}
        <Month text="Jan" action={() => handleMonthClick()} />
      </Wrapper>
    </>
  );
};
