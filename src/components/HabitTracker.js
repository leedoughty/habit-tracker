import "../stylesheets/ui.scss";
import { MdDone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { PropTypes } from "react";

const percentToDecimal = decimal => {
  return decimal * 100 + "%";
};

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total / goal);
};

export const HabitTracker = ({ total, yes, no, goal }) => (
  <div className="habit-tracker">
    <div className="total-days">
      <span>{total}</span>
      <FaCalendarCheck />
      <span>days</span>
    </div>
    <div className="Yes">
      <span>{yes}</span>
      <MdDone />
      <span>days</span>
    </div>
    <div className="No">
      <span>{no}</span>
      <MdClear />
      <span>days</span>
    </div>
    <div>
      <span>{calcGoalProgress(total, goal)}</span>
    </div>
  </div>
);

HabitTracker.propTypes = {
  total: PropTypes.number,
  yes: PropTypes.number,
  no: PropTypes.number,
  goal: PropTypes.number
};
