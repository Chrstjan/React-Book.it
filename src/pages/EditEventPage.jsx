import { useParams } from "react-router-dom";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { EventForm } from "../components/EventForm/EventForm";

export const EditEventPage = () => {
  const { user } = useContext(UserContext);

  const { ticketID } = useParams();
  const [event, setEvent] = useState({});

  console.log("Param", ticketID);

  useEffect(() => {
    const getTicket = async () => {
      const res = await fetch(`http://localhost:8081/getOne/${ticketID}`, {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      });
      if (!res.ok) {
        console.error("Failed to get ticket", res);
      } else {
        console.log("Ticket found", res);
      }
      const data = await res.json();
      setEvent(data);
    };

    getTicket();
  }, [ticketID]);

  useEffect(() => {
    console.log("Event", event);
  }, [event]);

  return (
    <Wrapper>
      <PageHeader headerText={`Edit ${event?.title} event`} />
      <EventForm
        endpoint={`update/${ticketID}`}
        method="PUT"
        eventData={event}
        btnText="Save"
      />
    </Wrapper>
  );
};
