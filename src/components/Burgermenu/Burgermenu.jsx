import s from "./Burgermenu.module.scss";

export const Burgermenu = ({ setIsMenuOpen }) => {
  return (
    <div
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className={s.burgermenu}
    >
      <span className={s.barStyling}></span>
      <span className={s.barStyling}></span>
      <span className={s.barStyling}></span>
    </div>
  );
};
