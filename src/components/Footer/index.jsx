import { Container } from "./style"

import { Logo } from "../Logo"

export function Footer() {
  return (
    <Container>
      <div className="logo-footer">
        <Logo />
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
