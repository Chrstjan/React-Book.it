import s from "./Icon.module.scss";

export const Icon = ({ src, alt, type, action }) => {
  return (
    <img
      onClick={action}
      className={`${s.iconStyling} ${s[type]}`}
      src={src}
      alt={alt}
    />
  );
};
