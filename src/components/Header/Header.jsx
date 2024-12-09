import s from "./Header.module.scss";

export const Header = ({ children }) => {
  return (
    <header>
      <span className={s.headerStyling}>{children}</span>
    </header>
  );
};
