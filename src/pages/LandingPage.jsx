import { Wrapper } from "../components/Wrapper/Wrapper";
import { Month } from "../components/Month/Month";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import { Event } from "../components/Event/Event";
import { ToastContainer, toast } from "react-toastify";

export const LandingPage = () => {
  const { user } = useContext(UserContext);
  const [events, setEvents] = useState([]);

  const handleMonthClick = () => {
    console.log("lol");
  };

  const notify = () => toast("Ticket deleted");

  const handleDeleteTicket = async (ticketID) => {
    if (user.accessToken) {
      const res = await fetch(`http://localhost:8081/delete/${ticketID}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      });
      if (!res.ok) {
        console.error("Failed to delete");
      } else {
        console.log("Ticket deleted", res);
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.id !== ticketID)
        );
        notify();
      }
    }
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
        <Month action={() => handleMonthClick()} />
        {events.length > 0 ? (
          <Event data={events} action={handleDeleteTicket} />
        ) : null}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Bounce
        />
      </Wrapper>
    </>
  );
};
