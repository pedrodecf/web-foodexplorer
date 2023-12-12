import { Container } from "./style"

export function SearchBar({ icon, onClick, ...rest }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick()
    }
  }
  return (
    <Container>
      <button type="button" onClick={onClick}>
        {icon}
      </button>
      <input {...rest} onKeyDown={handleKeyDown} />
    </Container>
  )
}
