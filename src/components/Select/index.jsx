import { Container } from "./style"

export function Select({ label, icon, ...rest }) {
  return (
    <Container>
      <label className="label-select">{label}</label>
      <select {...rest}></select>
    </Container>
  )
}
