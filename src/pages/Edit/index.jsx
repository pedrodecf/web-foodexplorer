import { Container } from "./style"
import { useState } from "react"

import { HeaderAdmin } from "../../components/HeaderAdmin"
import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Tag } from "../../components/Tag"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { MenuMobile } from "../../components/MenuMobile"

import { IoIosArrowBack } from "react-icons/io"
import { Footer } from "../../components/Footer"

export function Edit() {
  const [menu, setMenu] = useState(false)
  return (
    <Container>
      {menu ? <MenuMobile setMenu={setMenu} /> : ""}

      <HeaderAdmin setMenu={setMenu} />
      <form>
        <TextButton icon={<IoIosArrowBack />} text="voltar" />
        <h2>Editar prato</h2>
        <div className="first-colum">
          <Input
            type="file"
            label="Imagem do prato"
            placeholder="Selecione imagem"
          />
          <Input type="text" label="Nome" placeholder="Ex: Salada Ceasar" />
          <Select label="Categoria">
            {" "}
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </Select>
        </div>
        <div className="second-colum">
          <div className="ingredientes">
            <label>Ingredientes</label>
            <div className="tags-container">
              <Tag value="Pão Naan" />
              <Tag $isnew placeholder="Adicionar" />
            </div>
          </div>
          <Input type="number" label="Preço" placeholder="R$ 00,00" />
        </div>
        <Textarea
          label="Descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />
        <div className="form-btn">
          <Button type="button" text="Excluir prato" />
          <Button type="button" text="Salvar alterações" />
        </div>
      </form>
      <Footer />
    </Container>
  )
}
