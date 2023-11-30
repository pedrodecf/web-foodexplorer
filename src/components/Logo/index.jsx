import { Container } from "./style"
import IconLogo from "../../../public/icon-logo.svg"

export function Logo({ $isadmin }) {
  return (
    <Container $isadmin={$isadmin}>
      <img className="logo-img" src={IconLogo} />
      <p className="logo-text">food explorer</p>
      {$isadmin ? <span>admin</span> : ""}
    </Container>
  )
}
