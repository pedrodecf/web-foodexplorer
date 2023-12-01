import { Container } from "./style"

export function SearchBar({ icon, ...rest }) {
  return (
    <Container>
      {icon}
      <input {...rest} />
    </Container>
  )
}
