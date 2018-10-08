import { Component } from 'react'
import { HabitTrackerList } from './HabitTrackerList'
import { HabitTracker } from './HabitTracker'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allHabitDays: [
      {
        activity: "Meditation",
        date: "2016-01-02",
        yes: true,
        no: false
      }
    ]
    }
    this.addDay = this.addDay.bind(this)
  }

  addDay(newDay) {
    this.setState({
      allHabitDays: [
        ...this.state.allHabitDays,
        newDay
      ]
    })
  }

  countDays(filter) {
    const { allHabitDays } = this.state
    return allHabitDays.filter(
        (day) => (filter) ? day[filter] : day).length
  }
  render() {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ?
        <HabitTracker total={this.countDays()}
                      yes={this.countDays("yes")}
                      no={this.countDays("no")}/> :
        (this.props.location.pathname === "/add-day") ?
          <AddDayForm onNewDay={this.addDay}/> :
          <HabitTrackerList days={this.state.allHabitDays}
                            filter={this.props.params.filter}/>
      }
      </div>
    )
  }
}
