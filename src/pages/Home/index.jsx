//
import { Container } from "./style"

//
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

//
import { Header } from "../../components/Header"
import { MenuItem } from "../../components/MenuItem"
import { Footer } from "../../components/Footer"
import { MenuMobile } from "../../components/MenuMobile"
import HomeImg from "../../../public/home-img-mobile.png"

//
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../services/api"

export function Home() {
  const [menu, setMenu] = useState(false)
  const [allItems, setAllItems] = useState([])
  const navigate = useNavigate()

  function handleView(id) {
    navigate(`/view/${id}`)
  }

  useEffect(() => {
    async function fecthAllItems() {
      const response = await api.get("/items/?search")
      setAllItems(response.data)
    }
    fecthAllItems()
  }, [])

  return (
    <Container>
      {menu ? (
        <MenuMobile
          setMenu={setMenu}
        />
      ) : (
        ""
      )}
      <Header
        setMenu={setMenu}
      />
      <main>
        <div className="slogan">
          <div className="img-slogan-container">
            <img src={HomeImg} />
          </div>
          <div className="text-slogan-container">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <div className="cardapio">
          <div className="refeicoes">
            <h3 className="category-cardapio">Refeições</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={6}
              navigation={true}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 6,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 6,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {allItems.map((item) =>
                item.category == "refeicoes" ? (
                  <SwiperSlide>
                    <MenuItem
                      key={item.id}
                      img={`${api.defaults.baseURL}/files/${item.img}`}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      onClick={() => handleView(item.id)}
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )
              )}
              <SwiperSlide />
            </Swiper>
          </div>
          <div className="sobremesas">
            <h3 className="category-cardapio">Sobremesas</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={6}
              navigation={true}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 6,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 6,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {allItems.map((item) =>
                item.category == "sobremesas" ? (
                  <SwiperSlide>
                    <MenuItem
                      key={item.id}
                      img={`${api.defaults.baseURL}/files/${item.img}`}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      onClick={() => handleView(item.id)}
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )
              )}
              <SwiperSlide />
            </Swiper>
          </div>
          <div className="bebidas">
            <h3 className="category-cardapio">Bebidas</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={6}
              navigation={true}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 6,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 6,
                },
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {allItems.map((item) =>
                item.category == "bebidas" ? (
                  <SwiperSlide>
                    <MenuItem
                      key={item.id}
                      img={`${api.defaults.baseURL}/files/${item.img}`}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      onClick={() => handleView(item.id)}
                    />
                  </SwiperSlide>
                ) : (
                  ""
                )
              )}
              <SwiperSlide />
            </Swiper>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
