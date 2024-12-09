import { useEffect } from "react";
import { useState } from "react";

export const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  return (
    <p>
      {hours.toString().padStart(2, "0")}.{minutes.toString().padStart(2, "0")}
    </p>
  );
};
