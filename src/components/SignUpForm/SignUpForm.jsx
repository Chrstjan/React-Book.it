import { useForm } from "react-hook-form";
import s from "./SignUpForm.module.scss";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const SignUpForm = ({ headerText, subText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const notify = () => toast("Sign up successful");

  const handleFormSubmit = async (data) => {
    console.log(data);
    const { name, email, password, phone } = { ...data };

    const formData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };

    console.log(formData);

    const res = await fetch(`http://localhost:8081/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      console.log(res);
    } else {
      console.error("Failed to login");
    }
    const userData = await res.json();
    console.log("User", userData);
    notify();
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
      <fieldset>
        <header>
          <h2>{headerText}</h2>
          <p>{subText}</p>
        </header>
        <div>
          <label htmlFor="name">Name</label>
          <span className={s.inputContainer}>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  message: "Invalid name format",
                },
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              type="text"
              id="name"
              name="name"
              placeholder="Peter Jackson"
            />
            <Icon src="./User.svg" type="small" />
            {errors.name ? <span>{errors.name.message}</span> : null}
          </span>

          <label htmlFor="email">Email</label>
          <span className={s.inputContainer}>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  message: "Invalid email format",
                },
                minLength: {
                  value: 5,
                  message: "email must be at least 5 characters",
                },
              })}
              type="email"
              id="email"
              name="email"
              placeholder="peter@mymail.com"
            />
            <Icon src="./Circled Envelope.svg" type="small" />
            {errors.email ? <span>{errors.email.message}</span> : null}
          </span>

          <label htmlFor="password">Password</label>
          <span className={s.inputContainer}>
            <input
              {...register("password", {
                required: "password is required",
                pattern: {
                  message: "Invalid password format",
                },
                minLength: {
                  value: 8,
                  message: "password must be at least 8 characters",
                },
              })}
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
            <Icon src="./Lock.svg" type="small" />
            {errors.password ? <span>{errors.password.message}</span> : null}
          </span>

          <label htmlFor="phone">Phone</label>
          <span className={s.inputContainer}>
            <input
              {...register("phone", {
                required: "phone is required",
                pattern: {
                  message: "Invalid phone format",
                },
                minLength: {
                  value: 8,
                  message: "phone must be at least 8 characters",
                },
              })}
              type="text"
              id="phone"
              name="phone"
              placeholder="+45 55322323"
            />
            <Icon src="./Phone.svg" type="small" />
            {errors.phone ? <span>{errors.phone.message}</span> : null}
          </span>
        </div>
        <div className={s.formFooter}>
          <p>
            Already have an account? <Link to="/signin">Click here</Link> to
            sign in
          </p>
          <input type="submit" value="Sign up" />
        </div>
      </fieldset>
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
    </form>
  );
};
