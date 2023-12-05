import { Container } from "./style"

export function Button({ icon, text, ...rest }) {
  return (
    <Container>
      {icon}
      {text}
    </Container>
  )
}
