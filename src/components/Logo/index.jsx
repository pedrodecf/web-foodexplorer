import { Container } from "./style"
import IconLogo from "../../../public/icon-logo.svg"
import { useNavigate } from "react-router-dom"

export function Logo({ $isadmin }) {
  const navigate = useNavigate()
  return (
    <Container $isadmin={$isadmin} onClick={() => navigate("/")}>
        <div className="logo-container">
          <img className="logo-img" src={IconLogo} />
          <p className="logo-text">food explorer</p>
        </div>
        <div className="logo-admin">{$isadmin ? <span>admin</span> : ""} </div>
    </Container>
  )
}
