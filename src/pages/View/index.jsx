import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { ItemView } from "../../components/ItemView"
import { Container } from "./style"
import Item01 from "../../../public/01.png"
import { TextButton } from "../../components/TextButton"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { MenuMobile } from "../../components/MenuMobile"
import { useState } from "react"

export function View() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  return (
    <Container>
      {menu ? <MenuMobile setMenu={setMenu} /> : ""}

      <Header setMenu={setMenu} />

      <div className="voltar-btn">
        <TextButton
          icon={<IoIosArrowBack />}
          text="voltar"
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="view-container">
        <ItemView
          img={Item01}
          name="Salada Ravanello"
          description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
          price="25,00"
        />
      </div>
      <Footer />
    </Container>
  )
}
