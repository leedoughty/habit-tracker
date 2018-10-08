import { PropTypes } from 'react'

export const AddDayForm = ({ activity, date, yes, no, onNewDay }) => {

  let _activity, _date, _yes, _no
  const submit = (e) => {
    e.preventDefault()
    onNewDay({
      activity: _activity.value,
      date: _date.value,
      yes: _yes.checked,
      no: _no.checked
    })
    _activity.value = ''
    _date.value = ''
    _yes.checked = false
    _no.checked = false
  }

  return (
    <form onSubmit={submit} className="add-day-form">
      <label htmlFor="activity">Activity Name</label>
      <input id="activity"
             type="text"
             required
             defaultValue={activity}
             ref={input => _activity = input}/>

      <label htmlFor="date">Date</label>
      <input id="date"
             type="date"
             required
             defaultValue={date}
             ref={input => _date = input}/>
      <div>
        <input id="yes"
               type="checkbox"
               defaultChecked={yes}
               ref="yes"
               ref={input => _yes = input}/>
        <label htmlFor="yes">Yes</label>
      </div>
      <div>
        <input id="no"
               type="checkbox"
               defaultChecked={no}
               ref="no"
               ref={input => _no = input}/>
        <label htmlFor="no">No</label>
      </div>
      <button>Add Day</button>
    </form>
  )
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
