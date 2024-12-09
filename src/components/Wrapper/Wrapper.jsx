import s from "./Wrapper.module.scss";

export const Wrapper = ({ children }) => {
  return <section className={`${s.wrapperStyling}`}>{children}</section>;
};
