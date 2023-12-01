import { Container } from "./style"

export function Input({ label, icon, ...rest }) {
  return (
    <Container>
      <label className="label-input">{label}</label>
      <input {...rest}></input>
    </Container>
  )
}
