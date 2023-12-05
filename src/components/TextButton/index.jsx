import { Container } from "./style"
import { useNavigate } from "react-router-dom"

export function TextButton({ icon, text, ...rest }) {
  return (
    <Container {...rest}>
      {icon}
      {text}
    </Container>
  )
}
