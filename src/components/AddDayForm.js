import { PropTypes, Component } from 'react'

export class AddDayForm extends Component {
  render() {

    const { activity, date, yes, no } = this.props

    return (
      <form className="add-day-form">
        <label htmlFor="activity">Activity Name</label>
        <input id="activity"
               type="text"
               required
               defaultValue={activity}/>

        <label htmlFor="date">Date</label>
        <input id="date"
               type="date"
               required
               defaultValue={date}/>

        <div>
          <input id="yes"
                 type="checkbox"
                 defaultChecked={yes} />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input id="no"
                 type="checkbox"
                 defaultChecked={no} />
          <label htmlFor="no">No</label>
        </div>
      </form>
    )
  }
}

AddDayForm.defaultProps = {
  activity: "Meditation",
  date: "2018-07-10",
  yes: true,
  no: false
}

AddDayForm.propTypes = {
  activity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  yes: PropTypes.bool.isRequired,
  no: PropTypes.bool.isRequired
}
