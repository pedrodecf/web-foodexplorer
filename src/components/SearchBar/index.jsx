import { Container } from "./style"

export function SearchBar({ icon, onClick, ...rest }) {
  return (
    <Container>
      <button type="button" onClick={onClick}>{icon}</button>
      <input {...rest} />
    </Container>
  )
}
