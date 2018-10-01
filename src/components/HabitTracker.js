import { Component } from 'react'
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal)
}

export const HabitTracker = ({total, yes, no, goal}) => (
      <div className="habit-tracker">
        <div className="total-days">
          <span>{total}</span>
          <span>days</span>
        </div>
        <div className="Yes">
          <span>{yes}</span>
          <span>days</span>
        </div>
        <div className="No">
          <span>{no}</span>
          <span>days</span>
        </div>
        <div>
          <span>
            {calcGoalProgress(
              total,
              goal
            )}
          </span>
        </div>
      </div>
)
