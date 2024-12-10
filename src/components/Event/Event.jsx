import { useNavigate } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import s from "./Event.module.scss";

export const Event = ({ data, action }) => {
  const navigate = useNavigate();

  const handleEditTicket = (ticketID) => {
    console.log("Editing");
    console.log("The ticket!!", ticketID);
    navigate(`/edit-event/${ticketID}`);
  };

  return (
    <>
      <h2>Events this month</h2>
      {data?.map((item) => {
        return (
          <div key={item.id} className={s.eventContainer}>
            <span className={s.event}>
              <p>{item.title}</p>
              <p>{item.location}</p>
              <p>D. {item.date}</p>
              <p>KL. {item.time}</p>
            </span>
            <span className={s.iconContainer}>
              <Icon
                src="./Pencil.svg"
                type="edit"
                action={() => handleEditTicket(item.id)}
              />
              <Icon
                src="./Trash.svg"
                type="edit"
                action={() => action(item.id)}
              />
            </span>
          </div>
        );
      })}
    </>
  );
};
