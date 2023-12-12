//
import { Container } from "./style"

//
import NotFoundImg from "../../../public/notfound.png"
import { Button } from "../../components/Button"

//
import { useNavigate } from "react-router-dom"

export function NotFound() {
  const navigate = useNavigate()

  function handleBackToHome() {
    navigate("/")
  }

  return (
    <Container>
      <div className="not-found-container">
        <div className="not-found-img-container">
          <img src={NotFoundImg} alt="Pizza triste" />
        </div>
        <div className="not-found-info-container">
          <h1>404...</h1>
          <h2>Página não encontrada</h2>
          <Button text="Voltar para o início" onClick={handleBackToHome} />
        </div>
      </div>
    </Container>
  )
}
