import s from "./Month.module.scss";

export const Month = ({ action }) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NON",
    "DEC",
  ];
  const colors = ["yellow", "green", "red", "blue", "purple"];

  return (
    <section className={s.monthContainer}>
      {months.map((item, index) => {
        const monthColor = colors[index % colors.length];
        return (
          <div className={`${s[monthColor]}`} key={item} onClick={action}>
            {item}
          </div>
        );
      })}
    </section>
  );
};
