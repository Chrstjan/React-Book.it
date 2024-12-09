import s from "./PageHeader.module.scss";

export const PageHeader = ({ headerText }) => {
  return (
    <header className={s.headerStyling}>
      <h2>{headerText}</h2>
    </header>
  );
};
