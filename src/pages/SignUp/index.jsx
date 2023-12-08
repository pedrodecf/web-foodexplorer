// Estilo
import { Container } from "./style"

// Componentes
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextButton } from "../../components/TextButton"

//
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../../services/api"

export function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos.")
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso.")
        navigate("/")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar.")
        }
      })
  }

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
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button text="Criar conta" onClick={handleSignUp} />
        <TextButton text="Já tenho uma conta" onClick={() => navigate("/")} />
      </div>
    </Container>
  )
}
