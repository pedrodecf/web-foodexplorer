import { Container } from "./style"

import { SearchBar } from "../SearchBar"
import { TextButton } from "../TextButton"
import { Footer } from "../Footer"
import { LuSearch, LuX } from "react-icons/lu"

export function MenuMobile(props) {
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
          placeholder="Busque por pratos ou ingredientes"
        />

        <div className="opcoes-menu">
          <TextButton text="Sair" />
        </div>
      </main>
      <Footer />
    </Container>
  )
}
