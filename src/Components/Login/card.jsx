// Write your code here.
import './card.css'
import Button from "react-bootstrap/Button";

const CardItem = props => {
  const { cardDetails } = props
  const { title, description, className, button } = cardDetails

  return (
    <li className={`${className} card-item`}>
      <h1 className="card-title LoginCardList">{title}</h1>
      <p className="card-description LoginCardDes">{description}</p>
      <Button variant="dark">{button}</Button>
    </li>
  )
}

export default CardItem
