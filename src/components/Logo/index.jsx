import { Container } from "./style"
import IconLogo from "../../../public/icon-logo.svg"

export function Logo({ $isadmin }) {
  return (
    <Container $isadmin={$isadmin}>
      <img src={IconLogo} />
      <h1>food explorer</h1>
      {$isadmin ? <span>admin</span> : "" }
    </Container>
  )
}
