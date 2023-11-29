import { Container } from "./style"

export function Button({ text, ...rest }) {
  return (
    <Container>
      {text}
    </Container>
  )
}
