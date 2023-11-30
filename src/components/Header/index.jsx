import { Container } from "./style"

import { Logo } from "../Logo"
import { PiReceipt, PiList } from "react-icons/pi"

export function Header() {
  return (
    <Container>
      <div className="menu-header">
        <PiList />
      </div>
      <div className="logo-header">
        <Logo />
      </div>
      <div className="orders-header">
        <PiReceipt />
      </div>
    </Container>
  )
}
