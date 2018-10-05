import { createClass } from 'react'
import { HabitTrackerList } from './HabitTrackerList'
import { HabitTracker } from './HabitTracker'

export const App = createClass({
  getInitialState() {
    return {
        allHabitDays: [
				{
					activity: "Meditation",
					date: new Date("1/2/2018"),
					yes: true,
					no: false
				},
				{
					activity: "Practice Japanese",
					date: new Date("3/28/2018"),
					yes: false,
					no: true
				},
				{
					activity: "Code",
					date: new Date("4/28/2018"),
					yes: true,
					no: false
				}
			]
    }
  },
  countDays(filter) {
    const { allHabitDays } = this.state
    return allHabitDays.filter(
        (day) => (filter) ? day[filter] : day).length
  },
  render() {
    return (
      <div className="app">
        <HabitTrackerList days={this.state.allHabitDays}/>
        <HabitTracker total={this.countDays()}
                           yes={this.countDays("yes")}
                           no={this.countDays("no")}/>
      </div>
    )
  }
})
