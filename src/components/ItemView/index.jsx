import { Container } from "./style"

import { PiReceipt } from "react-icons/pi"
import { LuPlus, LuMinus } from "react-icons/lu"
import { useState } from "react"
import { Button } from "../Button"

export function ItemView({
  img,
  name,
  description,
  price,
  ingredients,
  data,
  ...rest
}) {
  const [amount, setAmount] = useState(1)

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
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="details-container">
        <div className="name-item details">
          <h1>{name}</h1>
        </div>
        <div className="description-item">
          <h2>{description}</h2>
        </div>
        <div className="ingredientes">
          <span>{ingredients}</span>
        </div>
        <div className="counter-and-btn">
          <div className="counter">
            <LuMinus className="counter-btn" onClick={handleRemoveAmount} />
            <p>0{amount}</p>
            <LuPlus className="counter-btn" onClick={handleAddAmount} />
          </div>
          <Button icon={<PiReceipt />} text={`pedir • R$${price}`} />
        </div>
      </div>
    </Container>
  )
}
