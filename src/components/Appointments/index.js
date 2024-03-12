import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
    isBookMarked: false,
    isStarred: false,
  }

  setTitle = e => {
    this.setState({title: e.target.value})
  }

  setDate = e => {
    this.setState({date: e.target.value})
  }

  addDetails = () => {
    const {title, date} = this.state
    const det = {
      id: uuidv4(),
      title,
      date,
      isBookMarked: false,
    }
    this.setState(p => ({
      appointmentsList: [...p.appointmentsList, det],
      title: '',
      date: '',
    }))
  }

  clickBookMark = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isBookMarked: !each.isBookMarked}
        }
        return each
      }),
    }))
  }

  setList = () => {
    this.setState(prev => ({isStarred: !prev.isStarred}))
  }

  render() {
    const {appointmentsList, title, date, isBookMarked, isStarred} = this.state
    console.log(isBookMarked)
    const filteredList = appointmentsList.filter(
      each => each.isBookMarked === true,
    )
    let list
    if (isStarred) {
      list = filteredList
    } else {
      list = appointmentsList
    }
    return (
      <div className="main-container">
        <div className="in-container">
          <div className="app-container">
            <div>
              <h2 className="heading">Add Appointment</h2>
              <p>TITLE</p>
              <input
                className="input-style"
                type="text"
                placeholder="Title"
                value={title}
                onChange={this.setTitle}
              />
              <p>DATE</p>
              <input
                className="input-style"
                type="date"
                placeholder="dd/mm/yyyy"
                value={date}
                onChange={this.setDate}
              />
              <br />
              <button
                type="button"
                className="button-style"
                onClick={this.addDetails}
              >
                Add
              </button>
            </div>
            <img
              className="image-style"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="hrz-style" />
          <div className="appointmentsitem-container">
            <div className="appointments-container">
              <h3>Appointments</h3>
              <button
                type="button"
                className="button-style"
                onClick={this.setList}
              >
                Starred
              </button>
            </div>
            <div className="item-style">
              {list.map(each => (
                <AppointmentItem
                  item={each}
                  key={each.id}
                  clickBookMark={this.clickBookMark}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
