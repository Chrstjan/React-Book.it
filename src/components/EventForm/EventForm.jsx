import { useForm } from "react-hook-form";
import { Icon } from "../Icon/Icon";
import s from "./EventForm.module.scss";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const EventForm = ({ endpoint }) => {
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const handleFormSubmit = async (data) => {
    console.log("Event data", data);
    const { title, location, image, time, date, description } = { ...data };

    const formData = {
      title: title,
      date: date,
      location: location,
      time: time,
      image: image,
      description: description,
    };

    console.log("USER!!!!", user);

    const res = await fetch(`http://localhost:8081/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      console.error("Failed to post");
    } else {
      console.log("Post success", res);
    }
    const eventData = await res.json();
    console.log("Created Event Data", eventData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <span className={s.inputContainer}>
          <input
            {...register("title", {
              required: "Title is required",
              pattern: {
                message: "Invalid title format",
              },
              minLength: {
                value: 2,
                message: "Title must be at least 2 characters",
              },
            })}
            type="text"
            id="title"
            name="title"
            placeholder="Malk de Koijn"
          />
          <Icon src="Pencil.svg" type="small" />
          {errors.title ? <span>{errors.title.message}</span> : null}
        </span>

        <label htmlFor="location">Location</label>
        <span className={s.inputContainer}>
          <input
            {...register("location", {
              required: "Location is required",
              pattern: {
                message: "Invalid location format",
              },
              minLength: {
                value: 5,
                message: "Location must be at least 5 characters",
              },
            })}
            type="text"
            id="location"
            name="location"
            placeholder="Trekanten"
          />
          <Icon src="Address.svg" type="small" />
          {errors.location ? <span>{errors.location.message}</span> : null}
        </span>

        <label htmlFor="image">Image</label>
        <span className={s.inputContainer}>
          <input
            {...register("image", {
              required: "Image is required",
              pattern: {
                message: "Invalid image format",
              },
              minLength: {
                value: 5,
                message: "Image must be at least 5 characters",
              },
            })}
            type="text"
            id="image"
            name="image"
            placeholder="https://www.imageofmalk..."
          />
          <Icon src="Image.svg" type="small" />
          {errors.image ? <span>{errors.image.message}</span> : null}
        </span>

        <label htmlFor="time">Time</label>
        <span className={s.inputContainer}>
          <input
            {...register("time", {
              required: "Time is required",
              pattern: {
                message: "Invalid time format",
              },
              minLength: {
                value: 4,
                message: "Time must be at least 4 characters",
              },
            })}
            type="text"
            id="time"
            name="time"
            placeholder="Kl. 22.00"
          />
          <Icon src="Clock.svg" type="small" />
          {errors.time ? <span>{errors.time.message}</span> : null}
        </span>

        <label htmlFor="date">Date</label>
        <span className={s.inputContainer}>
          <input
            {...register("date", {
              required: "Date is required",
              pattern: {
                message: "Invalid date format",
              },
              minLength: {
                value: 8,
                message: "Date must be at least 8 characters",
              },
            })}
            type="text"
            id="date"
            name="date"
            placeholder="14/11-2025"
          />
          <Icon src="Calendar.svg" type="small" />
          {errors.date ? <span>{errors.date.message}</span> : null}
        </span>

        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", {
            required: "Description is required",
            pattern: {
              message: "Invalid description format",
            },
            minLength: {
              value: 12,
              message: "Description must be at least 12 characters",
            },
          })}
          id="description"
          name="description"
        ></textarea>
        <div className={s.formFooter}>
          <input type="submit" value="Add" />
        </div>
      </fieldset>
    </form>
  );
};