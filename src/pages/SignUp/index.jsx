// Estilo da função
import { Container } from "./style"

// Componentes
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

export function SignUp() {
  return (
    <Container>
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="info-wrapper">
        <h2>Crie sua conta</h2>
        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />
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
        <Button text="Criar conta" />
        <TextButton text="Já tenho uma conta" />
      </div>
    </Container>
  )
}
