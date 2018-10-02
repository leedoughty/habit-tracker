import { MdDone } from 'react-icons/md'
import { MdClear } from 'react-icons/md'
import { FaCalendarCheck } from 'react-icons/fa'
import { HabitTrackerRow } from './HabitTrackerRow'

export const HabitTrackerList = ({days}) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Activity</th>
        <th>Yes</th>
        <th>No</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) =>
        <HabitTrackerRow key={i}
                         {...day}/>
        )}
    </tbody>
  </table>
)
