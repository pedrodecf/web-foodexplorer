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
import { IoIosArrowBack } from "react-icons/io"
import { Footer } from "../../components/Footer"

//
import { api } from "../../../services/api"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export function Edit() {
  const params = useParams()
  const navigate = useNavigate()

  const [menu, setMenu] = useState(false)
  const [data, setData] = useState(null)

  const [name, setName] = useState("")
  const [img, setImg] = useState(null)
  const [imgFile, setImgFile] = useState(null)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState()
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState(null)

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

  async function updateItem() {
    await api.put(`/items/${params.id}`, {
      name,
      img,
      ingredients,
      category,
      price,
      description,
    })

    if (imgFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("img", imgFile)

      await api.patch(`/items/img/${params.id}`, fileUploadForm)
    }

    alert("Item atualizado com sucesso.")
    navigate(`/view/${params.id}`)
  }

  async function deleteItem() {
    const confirm = window.confirm("Deseja excluir este prato?")
    if (confirm) {
      await api.delete(`/items/${params.id}`)
      alert("Prato excluído com sucesso.")
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchItem() {
      const response = await api.get(`/items/${params.id}`)
      setData(response.data)
      setName(response.data.name)
      setImg(response.data.img)
      setPrice(response.data.price)
      setDescription(response.data.description)
      setCategory(response.data.category)

      const namesArray = response.data.ingredients.map(
        (ingredient) => ingredient.name
      )
      setIngredients(namesArray)
    }
    fetchItem()
  }, [])

  return (
    <Container>
      {menu ? <MenuMobile setMenu={setMenu} /> : ""}

      <HeaderAdmin setMenu={setMenu} />
      {data && (
        <form>
          <TextButton
            icon={<IoIosArrowBack />}
            text="voltar"
            onClick={() => navigate(-1)}
          />
          <h2>Editar prato</h2>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              label="Categoria"
              value={category}
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
                {ingredients &&
                  ingredients.map((ingredient, index) => (
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <Textarea
            label="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="form-btn">
            <Button type="button" text="Excluir prato" onClick={deleteItem} />
            <Button
              type="button"
              text="Salvar alterações"
              onClick={updateItem}
            />
          </div>
        </form>
      )}
      <Footer />
    </Container>
  )
}
