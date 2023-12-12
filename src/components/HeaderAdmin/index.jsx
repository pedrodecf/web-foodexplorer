//
import { Container } from "./style"

//
import { Logo } from "../Logo"
import { Input } from "../Input"
import { SearchBar } from "../SearchBar"
import { PiReceipt, PiList } from "react-icons/pi"
import { LuLogOut, LuSearch } from "react-icons/lu"

//
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function HeaderAdmin(props) {
  const { signOut } = useAuth()
  const [searched, setSearched] = useState("")
  const navigate = useNavigate()

  function handleOpenMenu() {
    props.setMenu(true)
  }

  function handleSubmit() {
    navigate(`/search/?search=${searched}`)
  }

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <Container>
      <div className="header-container">
        <div className="menu-header">
          <PiList onClick={handleOpenMenu} />
        </div>
        <div className="logo-header">
          <Logo $isadmin />
        </div>
        <div className="search-header">
          <SearchBar
            icon={<LuSearch />}
            type="search"
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearched(e.target.value)}
            onClick={handleSubmit}
          />
        </div>
        <div className="orders-header action" onClick={() => navigate("/new")}>
          <span className="orders-text-desktop">Novo Prato</span>
        </div>
        <div className="logout-desktop">
          <LuLogOut onClick={handleSignOut} />
        </div>
      </div>
    </Container>
  )
}
