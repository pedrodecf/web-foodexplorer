//
import { Container } from "./style"

//
import { Logo } from "../Logo"
import { SearchBar } from "../SearchBar"
import { PiReceipt, PiList } from "react-icons/pi"
import { LuLogOut, LuSearch } from "react-icons/lu"

//
import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"
import { api } from "../../../services/api"
import { useNavigate } from "react-router-dom"

export function Header(props) {
  const { signOut } = useAuth()
  const [searched, setSearched] = useState("")
  const navigate = useNavigate()

  function handleOpenMenu() {
    props.setMenu(true)
  }

  function handleSubmit() {
    navigate(`/search/?search=${searched}`)
  }

  return (
    <Container>
      <div className="header-container">
        <div className="menu-header">
          <PiList onClick={handleOpenMenu} />
        </div>
        <div className="logo-header">
          <Logo />
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
        <div className="orders-header action">
          <PiReceipt />
          <span className="orders-text-desktop">Sacola</span>
          <div className="orders-counter">
            <span className="parentheses-only-desktop">&#40;</span>
            <span>0</span>
            <span className="parentheses-only-desktop">&#41;</span>
          </div>
        </div>
        <div className="logout-desktop">
          <LuLogOut onClick={signOut} />
        </div>
      </div>
    </Container>
  )
}
