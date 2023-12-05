import { Container } from "./style"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"

import { IoIosArrowBack } from "react-icons/io"


export function NewItem() {
  return (
    <Container>
      <HeaderAdmin />
      <TextButton icon={<IoIosArrowBack />} text="voltar" />
      <form>
        <h2>Novo prato</h2>
        <Input
          type="file"
          label="Imagem do prato"
          placeholder="Selecione imagem"
        />
      </form>
    </Container>
  )
}
