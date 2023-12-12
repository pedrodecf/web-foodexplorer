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

export function HeaderAdmin(props) {
  const { signOut } = useAuth()
  function handleOpenMenu() {
    props.setMenu(true)
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
            placeholder="Busque por pratos ou ingredientes"
          />
        </div>
        <div className="orders-header action" onClick={() => navigate("/new")}>
          <span className="orders-text-desktop">Novo Prato</span>
        </div>
        <div className="logout-desktop">
          <LuLogOut onClick={signOut} />
        </div>
      </div>
    </Container>
  )
}
