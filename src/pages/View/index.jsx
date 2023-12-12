//
import { Container, ItemV, Tag } from "./style"

//
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { TextButton } from "../../components/TextButton"
import { Button } from "../../components/Button"
import { IoIosArrowBack } from "react-icons/io"
import { MenuMobile } from "../../components/MenuMobile"
import { LuPlus, LuMinus } from "react-icons/lu"
import { PiReceipt } from "react-icons/pi"

//
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../../services/api"
import { useAuth } from "../../hooks/auth"
import { USER_ROLE } from "../../../utils/roles"

export function View() {
  const navigate = useNavigate()
  const params = useParams()

  const [menu, setMenu] = useState(false)
  const [data, setData] = useState(null)
  const [itemImg, setItemImg] = useState(null)

  const [amount, setAmount] = useState(1)

  const { user } = useAuth()

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

  function handleEdit(){
    navigate(`/edit/${data.id}`)
  }

  useEffect(() => {
    async function fecthItem() {
      const response = await api.get(`/items/${params.id}`)
      setData(response.data)
      setItemImg(`${api.defaults.baseURL}/files/${response.data.img}`)
    }

    fecthItem()
  }, [])

  return (
    <Container>
      {menu ? <MenuMobile setMenu={setMenu} /> : ""}
      {user.role === USER_ROLE.ADMIN ? (
        <HeaderAdmin setMenu={setMenu} />
      ) : (
        <Header setMenu={setMenu} />
      )}

      <div className="voltar-btn">
        <TextButton
          icon={<IoIosArrowBack />}
          text="voltar"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="view-container">
        {data && (
          <ItemV>
            <div className="img-container">
              <img src={itemImg} />
            </div>
            <div className="details-container">
              <div className="name-item details">
                <h1>{data.name}</h1>
              </div>
              <div className="description-item">
                <h2>{data.description}</h2>
              </div>
              <div className="ingredientes">
                {data.ingredients &&
                  data.ingredients.map((ingredient) => (
                    <Tag key={ingredient.id}>
                      <span>{ingredient.name}</span>
                    </Tag>
                  ))}
              </div>
              {user.role === USER_ROLE.CUSTOMER ? (
                <div className="counter-and-btn">
                  <div className="counter">
                    <LuMinus
                      className="counter-btn"
                      onClick={handleRemoveAmount}
                    />
                    <p>0{amount}</p>
                    <LuPlus className="counter-btn" onClick={handleAddAmount} />
                  </div>
                  <Button
                    icon={<PiReceipt />}
                    text={`pedir • R$${data.price}`}
                  />
                </div>
              ) : (
                <div className="counter-and-btn">
                  <Button text={"Editar prato"} onClick={handleEdit} />
                </div>
              )}
            </div>
          </ItemV>
        )}
      </div>
      <Footer />
    </Container>
  )
}
