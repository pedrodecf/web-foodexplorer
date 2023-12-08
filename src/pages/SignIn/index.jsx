// Estilo
import { Container } from "./style"

// Componentes
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

//
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export function SignIn() {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignIn() {
    signIn({ email, password })
  }
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Entrar" onClick={handleSignIn} />
        <TextButton
          text="Criar uma conta"
          onClick={() => navigate("/register")}
        />
      </div>
    </Container>
  )
}
