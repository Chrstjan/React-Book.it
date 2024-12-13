import s from "./UserAccount.module.scss";

export const UserAccount = (userData) => {
  return (
    <div className={s.accountStyling}>
      <h3>Account:</h3>
      <h4>Name: {userData?.userData?.name}</h4>
      <h4>Email: {userData?.userData?.email}</h4>
      <h4>Phone: {userData?.userData?.phone}</h4>
    </div>
  );
};
