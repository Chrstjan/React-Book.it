import s from "./Month.module.scss";

export const Month = ({ action }) => {
  const months = [
    {
      month: "JAN",
      date: "01",
    },
    {
      month: "FEB",
      date: "02",
    },
    {
      month: "MAR",
      date: "03",
    },
    {
      month: "APR",
      date: "04",
    },
    {
      month: "MAY",
      date: "05",
    },
    {
      month: "JUN",
      date: "06",
    },
    {
      month: "JUL",
      date: "07",
    },
    {
      month: "AUG",
      date: "08",
    },
    {
      month: "SEP",
      date: "09",
    },
    {
      month: "OCT",
      date: "10",
    },
    {
      month: "NOV",
      date: "11",
    },
    {
      month: "DEC",
      date: "12",
    },
  ];
  const colors = ["yellow", "green", "red", "blue", "purple"];

  return (
    <section className={s.monthContainer}>
      {months.map((item, index) => {
        const monthColor = colors[index % colors.length];
        return (
          <div
            className={`${s[monthColor]}`}
            key={item.month}
            onClick={() => action(item.date)}
          >
            {item.month}
          </div>
        );
      })}
    </section>
  );
};
