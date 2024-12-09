import { useForm } from "react-hook-form";
import s from "./LoginForm.module.scss";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const LoginForm = ({ headerText, subText }) => {
  const { user, loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

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
    }
  };

  useEffect(() => {
    console.log("User context:", user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={s.formStyling}>
      <fieldset>
        <header>
          <h2>{headerText}</h2>
          <p>{subText}</p>
        </header>
        <div>
          <label htmlFor="email">Email</label>
          <span>
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
            {errors.email ? <span>{errors.email.message}</span> : null}
          </span>

          <label htmlFor="password">Password</label>
          <span>
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
            {errors.password ? <span>{errors.password.message}</span> : null}
          </span>
        </div>

        <input type="submit" value="Sign in" />
      </fieldset>
    </form>
  );
};
