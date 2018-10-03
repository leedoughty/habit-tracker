import { MdDone } from "react-icons/md"
import { MdClear } from "react-icons/md"
import { FaCalendarCheck } from "react-icons/fa"
import { HabitTrackerRow } from "./HabitTrackerRow"
import { PropTypes } from "react"

export const HabitTrackerList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Activity</th>
        <th>Yes</th>
        <th>No</th>
      </tr>
    </thead>
    <tbody>{days.map((day, i) => <HabitTrackerRow key={i} {...day} />)}</tbody>
  </table>
)

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
