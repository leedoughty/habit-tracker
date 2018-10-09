import { MdDone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { PropTypes } from "react";

export const HabitTrackerRow = ({ activity, date, yes, no }) => (
  <tr>
    <td>
        {date}
    </td>
    <td>{activity}</td>
    <td>{yes ? <MdDone /> : null}</td>
    <td>{no ? <MdClear /> : null}</td>
  </tr>
);

HabitTrackerRow.propTypes = {
  activity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  yes: PropTypes.bool,
  no: PropTypes.bool
};
