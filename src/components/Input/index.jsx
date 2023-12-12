import { Container } from "./style"

export function Input({ label, icon, onChange, value, ...rest }) {
  return (
    <Container>
      <label className="label-input">{label}</label>
      <input onChange={onChange} value={value}{...rest}></input>
    </Container>
  )
}
