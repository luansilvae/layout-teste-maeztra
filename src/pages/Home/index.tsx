import React from "react"
import { HeaderCarousel } from "../../components/HeaderCarousel"
import { Brands } from "../../components/Brands"
import { Newsletter } from "../../components/Newsletter"
import { ProductShelf } from "../../components/ProductShelf"
import { Benefits } from "../../components/Benefits"
import { BannerCollection } from "../../components/BannerCollection"

import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <main>
      <HeaderCarousel />
      <Benefits />
      <article>
        <Brands />
        <ProductShelf />
        <BannerCollection />
      </article>
      <Newsletter />
    </main>
  )
}
