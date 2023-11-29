// Estilo da função
import { Container } from "./style"

// Componentes
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

export function SignIn() {
  return (
    <Container>
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="info-wrapper">
        <h2>Faça Login</h2>
        <Input
          label="Email"
          type="text"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button text="Entrar" />
        <TextButton text="Criar uma conta" />
      </div>
    </Container>
  )
}
