//
import { Container } from "./style"

//
import { SearchBar } from "../SearchBar"
import { TextButton } from "../TextButton"
import { Footer } from "../Footer"
import { LuSearch, LuX } from "react-icons/lu"

//
import { useAuth } from "../../hooks/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function MenuMobile(props) {
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [searched, setSearched] = useState("")

  function handleSubmit() {
    navigate(`/search/?search=${searched}`)
    props.setMenu(false)
  }

  function handleCloseMenu() {
    props.setMenu(false)
  }

  return (
    <Container>
      <div className="fechar-menu">
        <LuX onClick={handleCloseMenu} />
        <p>Menu</p>
      </div>
      <main>
        <SearchBar
          icon={<LuSearch />}
          type="search"
          placeholder="Busque por pratos ou ingredientes"
          onChange={(e) => setSearched(e.target.value)}
          onClick={handleSubmit}
        />

        <div className="opcoes-menu">
          <TextButton text="Sair" onClick={signOut} />
        </div>
      </main>
      <Footer />
    </Container>
  )
}
