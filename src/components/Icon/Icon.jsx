import s from "./Icon.module.scss";

export const Icon = ({ src, alt, type }) => {
  return <img className={`${s.iconStyling} ${s[type]}`} src={src} alt={alt} />;
};
