import './index.css'

const AppointmentItem = props => {
  const {item, clickBookMark} = props
  const {title, date, id, isBookMarked} = item

  let imageUrl

  if (isBookMarked)
    imageUrl =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  else
    imageUrl =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const setBookMark = () => {
    clickBookMark(id)
  }

  return (
    <li className="list-container">
      <div className="list-in-container">
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <p onClick={setBookMark}>
        <img className="image" src={imageUrl} alt="star" />
      </p>
    </li>
  )
}

export default AppointmentItem
