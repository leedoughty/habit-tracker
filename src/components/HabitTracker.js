import { Component } from 'react'
import '../stylesheets/ui.scss'

export class HabitTracker extends Component{
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }
  render() {
      return (
        <div className="habit-tracker">
          <div className="total-days">
            <span>{this.props.total}</span>
            <span>days</span>
          </div>
          <div className="Yes">
            <span>{this.props.yes}</span>
            <span>days</span>
          </div>
          <div className="No">
            <span>{this.props.no}</span>
            <span>days</span>
          </div>
          <div>
            <span>
              {this.calcGoalProgress(
                this.props.total,
                this.props.goal
              )}
            </span>
          </div>
        </div>
      )
  }
}
