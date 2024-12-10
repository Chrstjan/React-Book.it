import { Wrapper } from "../components/Wrapper/Wrapper";
import { Month } from "../components/Month/Month";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { useEffect } from "react";

export const LandingPage = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);

  const handleMonthClick = () => {
    console.log("lol");
  };

  useEffect(() => {
    const getAllEvents = async () => {
      const res = await fetch("http://localhost:8081/getAll", {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      });
      if (!res.ok) {
        console.error(`Failed to fetch`);
      } else {
        console.log("Fetch", res);
      }
      const data = await res.json();
      setEvents(data);
      return data;
    };
    if (user != {}) {
      getAllEvents();
    }
  }, [user]);

  useEffect(() => {
    console.log("Events!", events);
  }, [events]);

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
