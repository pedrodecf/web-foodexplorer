//
import { Container } from "./style"

//
import { Button } from "../Button"
import { LuPlus, LuMinus } from "react-icons/lu"
import { FaHeart, FaRegHeart } from "react-icons/fa6"
import { FaPen } from "react-icons/fa"


//
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../../utils/roles"

export function MenuItem({
  img,
  name,
  description,
  price,
  ingredients,
  onClick,
  onClick2,
  ...rest
}) {
  const [amount, setAmount] = useState(1)
  const [favorited, setFavorited] = useState(false)
  const { user } = useAuth()

  function handleFavorite() {
    setFavorited(!favorited)
  }

  function handleRemoveAmount() {
    if (amount > 1) {
      setAmount(amount - 1)
      return amount
    }
  }

  function handleAddAmount() {
    setAmount(amount + 1)
    return amount
  }

  return (
    <Container>
      {user.role === USER_ROLE.CUSTOMER && (
        <div className="favorite" onClick={handleFavorite}>
          {favorited ? <FaHeart /> : <FaRegHeart />}
        </div>
      )}
      {user.role === USER_ROLE.ADMIN && (
        <div className="favorite" onClick={onClick2}>
          <FaPen />
        </div>
      )}
      <img src={img} alt={name} onClick={onClick} />
      <div className="name-item details" onClick={onClick}>
        <h1>{name}</h1>
      </div>
      <div className="description-item">
        <h2>{description}</h2>
      </div>
      <span>R${price}</span>
      {user.role === USER_ROLE.CUSTOMER && (
        <div className="counter-and-btn">
          <div className="counter">
            <LuMinus className="counter-btn" onClick={handleRemoveAmount} />
            <p>{amount}</p>
            <LuPlus className="counter-btn" onClick={handleAddAmount} />
          </div>
          <Button text="incluir" />
        </div>
      )}
    </Container>
  )
}
