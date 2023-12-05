import { Container } from "./style"
import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "../Button"
import { LuPlus, LuMinus } from "react-icons/lu"
import { FaHeart, FaRegHeart } from "react-icons/fa6"

export function MenuItem({
  img,
  name,
  description,
  price,
  ingredients,
  ...rest
}) {
  const [amount, setAmount] = useState(1)
  const [favorited, setFavorited] = useState(false)

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
      <div className="favorite" onClick={handleFavorite}>
        {favorited ? <FaHeart /> : <FaRegHeart />}
      </div>
      <img src={img} alt={name} />
      <div className="name-item details">
        <Link to={"/view/:id"}>
          <h1>{name}</h1>
        </Link>
      </div>
      <div className="description-item">
        <h2>{description}</h2>
      </div>
      <span>{price}</span>
      <div className="counter-and-btn">
        <div className="counter">
          <LuMinus className="counter-btn" onClick={handleRemoveAmount} />
          <p>{amount}</p>
          <LuPlus className="counter-btn" onClick={handleAddAmount} />
        </div>
        <Button text="incluir" />
      </div>
    </Container>
  )
}
