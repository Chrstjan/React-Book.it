import { useForm } from "react-hook-form";
import s from "./LoginForm.module.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { ToastContainer, toast } from "react-toastify";

export const LoginForm = ({ headerText, subText }) => {
  const { user, loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const notify = () => toast("Login successful");

  const handleFormSubmit = async (data) => {
    console.log(data);
    const { email, password } = { ...data };

    const formData = {
      email: email,
      password: password,
    };

    console.log(formData);

    const res = await fetch(`http://localhost:8081/sign-in`, {
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

    if (userData) {
      loginUser(userData);
      notify();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
      <fieldset>
        <header>
          <h2>{headerText}</h2>
          <p>{subText}</p>
        </header>
        <div>
          <label htmlFor="email">Username / email</label>
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
              placeholder="admin@mymail.com"
            />
            <Icon src="./User.svg" type="small" />
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
        </div>
        <div className={s.formFooter}>
          <p>
            No user account? <Link to="/signup">Click here</Link> to sign up
          </p>
          <input type="submit" value="Sign in" />
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
