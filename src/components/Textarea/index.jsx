import { Container } from "./style"

export function Textarea({ label, icon, ...rest }) {
  return (
    <Container>
      <label className="label-input">{label}</label>
      <textarea {...rest}></textarea>
    </Container>
  )
}
