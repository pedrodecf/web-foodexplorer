import { Container } from "./style"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { Header } from "../../components/Header"
import { MenuItem } from "../../components/MenuItem"
import { Footer } from "../../components/Footer"

import HomeImg from "../../../public/home-img-mobile.png"

// Imagens de exemplo (remover  a importação depois)
import Item01 from "../../../public/01.png"
import Item03 from "../../../public/03.png"
import Item05 from "../../../public/05.png"
import Item06 from "../../../public/06.png"
import Item09 from "../../../public/09.png"
import Item10 from "../../../public/10.png"

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <div className="slogan">
          <div className="img-slogan-container">
            <img src={HomeImg}/>
          </div>
          <div className="text-slogan-container">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <div className="cardapio">
          <div className="refeicoes">
            <h3>Refeições</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={6}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <MenuItem
                  img={Item01}
                  name="Salada Ravanello"
                  price="R$ 49,97"
                />
              </SwiperSlide>
              <SwiperSlide>
                <MenuItem
                  img={Item03}
                  name="Spaguetti Gambe"
                  price="R$ 79,97"
                />
              </SwiperSlide>
              <SwiperSlide />
            </Swiper>
          </div>
          <div className="sobremesas">
            <h3>Sobremesas</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={6}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <MenuItem img={Item05} name="Prugna Pie" price="R$ 79,97" />
              </SwiperSlide>
              <SwiperSlide>
                <MenuItem img={Item06} name="Peachy Pastrie" price="R$ 32,97" />
              </SwiperSlide>
              <SwiperSlide />
            </Swiper>
          </div>
          <div className="bebidas">
            <h3>Bebidas</h3>
            <Swiper
              slidesPerView={2}
              spaceBetween={6}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <MenuItem img={Item10} name="Espresso" price="R$ 15,97" />
              </SwiperSlide>
              <SwiperSlide>
                <MenuItem
                  img={Item09}
                  name="Suco de maracujá"
                  price="R$ 13,97"
                />
              </SwiperSlide>
              <SwiperSlide />
            </Swiper>
          </div>
        </div>
      <Footer/>
      </main>
    </Container>
  )
}
