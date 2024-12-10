import { Wrapper } from "../components/Wrapper/Wrapper";
import { PageHeader } from "../components/PageHeader/PageHeader";
import { EventForm } from "../components/EventForm/EventForm";

export const AddEventPage = () => {
  return (
    <Wrapper>
      <PageHeader headerText="Add new event" />
      <EventForm endpoint="create" method="POST" btnText="Add" />
    </Wrapper>
  );
};
