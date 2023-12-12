//
import { Container } from "./style"

//
import { HeaderAdmin } from "../../components/HeaderAdmin"
import { TextButton } from "../../components/TextButton"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"
import { Tag } from "../../components/Tag"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { MenuMobile } from "../../components/MenuMobile"
import { Footer } from "../../components/Footer"
import { IoIosArrowBack } from "react-icons/io"

//
import { api } from "../../../services/api"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function NewItem() {
  const [menu, setMenu] = useState(false)
  
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [imgFile, setImgFile] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("refeicoes")

  function handleAddIngredient() {
    if (!newIngredient) {
      return alert("Adicione um nome ao ingrediente.")
    } else {
      setIngredients((prevState) => [...prevState, newIngredient])
      setNewIngredient("")
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    )
  }

  function handleChangeImg(event) {
    const file = event.target.files[0]
    setImgFile(file)
  }

  async function handleNewItem() {
    if (!name) {
      return alert("Digite o nome do prato.")
    }

    if (ingredients.length === 0) {
      return alert("Digite ao menos um ingrediente.")
    }

    if (!price) {
      return alert("Digite o preço do prato.")
    }

    if (!description) {
      return alert("Digite uma descrição para o prato.")
    }

    if (!category) {
      return alert("Escolha a categoria do prato.")
    }

    if (!imgFile) {
      return alert("Envie uma imagem do prato.")
    }

    await api.post("/items", {
      name,
      ingredients,
      price,
      description,
      category,
    })

    if (imgFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("img", imgFile)

      await api.patch("/items/img", fileUploadForm)
    }

    alert("Item cadastrado com sucesso.")
    navigate("/")
  }

  return (
    <Container>
      {menu ? <MenuMobile setMenu={setMenu} /> : ""}

      <HeaderAdmin setMenu={setMenu} />
      <form>
        <TextButton icon={<IoIosArrowBack />} text="voltar" onClick={() => navigate(-1)}/>
        <h2>Novo prato</h2>
        <div className="first-colum">
          <Input
            type="file"
            label="Imagem do prato"
            placeholder="Selecione imagem"
            onChange={handleChangeImg}
          />

          <Input
            type="text"
            label="Nome"
            placeholder="Ex: Salada Ceasar"
            onChange={(e) => setName(e.target.value)}
          />

          <Select
            label="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="refeicoes">Refeições</option>
            <option value="sobremesas">Sobremesas</option>
            <option value="bebidas">Bebidas</option>
          </Select>
        </div>
        <div className="second-colum">
          <div className="ingredientes">
            <label>Ingredientes</label>
            <div className="tags-container">
              {ingredients.map((ingredient, index) => (
                <Tag
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}
              <Tag
                $isnew
                placeholder="Adicionar"
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </div>
          <Input
            type="number"
            label="Preço"
            placeholder="R$ 00,00"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <Textarea
          label="Descrição"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="form-btn">
          <Button
            type="button"
            text="Salvar alterações"
            onClick={handleNewItem}
          />
        </div>
      </form>
      <Footer />
    </Container>
  )
}
