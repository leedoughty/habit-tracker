import { MdDone } from "react-icons/md"
import { MdClear } from "react-icons/md"
import { FaCalendarCheck } from "react-icons/fa"
import { HabitTrackerRow } from "./HabitTrackerRow"
import { PropTypes } from "react"
import { Link } from 'react-router'

export const HabitTrackerList = ({days, filter}) => {
  const filteredDays = (!filter ||
        !filter.match(/yes|no/))?
        days:
        days.filter(day => day[filter])
  return (
    <div className="habit-tracker-list">
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Activity</th>
          <th>Yes</th>
          <th>No</th>
        </tr>
        <tr>
            <td colSpan={4}>
                <Link to="list-days">
                  All Days
                </Link>
                <Link to="/list-days/yes">
                  Yes Days
                </Link>
                <Link to="/list-days/no">
                  No Days
                </Link>
            </td>
        </tr>
      </thead>
      <tbody>
        {filteredDays.map((day, i) => <HabitTrackerRow key={i} {...day} />)}</tbody>
    </table>
  </div>
)
}

HabitTrackerList.propTypes = {
  days: function(props) {
    if (!Array.isArray(props.days)) {
      return new Error("HabitTrackerList should be an array");
    } else if(!props.days.length) {
        return new Error(
          "HabitTrackerList must have at least one record"
        )
    } else {
      return null
    }
  }
}
