//
import { Container } from "./style"

//
import { Header } from "../../components/Header"
import { MenuItem } from "../../components/MenuItem"
import { Footer } from "../../components/Footer"
import { MenuMobile } from "../../components/MenuMobile"

//
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../services/api"

export function Search() {
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const [query, setQuery] = useState("")
  const [itemsSearch, setItemsSearch] = useState([])

  function handleView(id) {
    navigate(`/view/${id}`)
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    setQuery(params.toString())

    async function fetchSearchItems() {
      const response = await api.get(`/items/?${query}`)
      setItemsSearch(response.data)
    }
    fetchSearchItems()
  }, [itemsSearch])

  return (
    <Container>
      {menu ? <MenuMobile setMenu={setMenu} /> : ""}
      <Header setMenu={setMenu} />
      {itemsSearch && (
        <div className="main-container">
          {itemsSearch.length > 0 ? (
            itemsSearch.map((item) => (
              <MenuItem
                key={item.id}
                img={`${api.defaults.baseURL}/files/${item.img}`}
                name={item.name}
                description={item.description}
                price={item.price}
                onClick={() => handleView(item.id)}
              />
            ))
          ) : (
            <p className="zero-result">Nenhum item encontrado.</p>
          )}
        </div>
      )}
      <Footer />
    </Container>
  )
}
