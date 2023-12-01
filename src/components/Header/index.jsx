import { Container } from "./style"

import { Logo } from "../Logo"
import { Input } from "../Input"
import { SearchBar } from "../SearchBar"
import { PiReceipt, PiList } from "react-icons/pi"
import { LuLogOut, LuSearch } from "react-icons/lu"


export function Header() {
  return (
    <Container>
      <main>
        <div className="menu-header">
          <PiList />
        </div>
        <div className="logo-header">
          <Logo />
        </div>
        <div className="search-header">
          <SearchBar
            icon={<LuSearch />}
            placeholder="Busque por pratos ou ingredientes"
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
          <LuLogOut />
        </div>
      </main>
    </Container>
  )
}
