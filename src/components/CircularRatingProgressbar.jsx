import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CircularRatingProgressbar = ({ rating, progressBarClass = "" }) => {
  const [percentage, setPercentage] = useState(0);
  const endPercentage = rating * 10;

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < endPercentage) {
        setPercentage(percentage + 1);
      } else {
        clearInterval(interval); // Clear the interval when the condition is met
      }
    }, 20);
    return () => {
      clearInterval(interval); // Cleanup function to clear the interval when the component unmounts or when percentage reaches endPercentage
    };
  }, [percentage]);

  const colorPercentage = percentage / 100;
  const pathColor =
    colorPercentage < 0.5
      ? `rgba(246, 36, 43, ${colorPercentage})`
      : colorPercentage < 0.7
      ? `rgba(246, 169, 36, ${colorPercentage})`
      : `rgba(36, 246, 113, ${colorPercentage})`;

  return (
    <div className={`min-w-[50px] sm:min-w-[60px] w-12 ${progressBarClass}`}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={12}
        background={true}
        styles={buildStyles({
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "25px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: pathColor,
          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#fff",
        })}
      />
    </div>
  );
};
export default CircularRatingProgressbar;
