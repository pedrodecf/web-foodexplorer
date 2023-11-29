// Estilo da função
import { Container } from "./style"

// Componentes
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"

export function SignIn() {
  return (
    <Container>
      <Logo $isadmin />
      <Input label="iofjhaoiud" placeholder="E-mail" />
    </Container>
  )
}
