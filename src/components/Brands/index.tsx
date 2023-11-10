import React from "react"

import "./Brands.scss"

import CommaIcon from "../../assets/comma.png"
import zaraIcon from "../../assets/zara.png"
import melissaIcon from "../../assets/melissa.png"
import annTaylorIcon from "../../assets/ann-taylor.png"
import forever21Icon from "../../assets/forever-21.png"

export const Brands: React.FC = () => {
  return (
    <section className="brands">
      <h2 className="brands__title">Marcas Parceiras</h2>
      <div className="brands__container">
        <div className="brands__content">
          <div className="brands__content__item">
            <img src={CommaIcon} alt="Comma" />
          </div>

          <div className="brands__content__item">
            <img src={melissaIcon} alt="Melissa" />
          </div>

          <div className="brands__content__item">
            <img src={forever21Icon} alt="Forever 21" />
          </div>

          <div className="brands__content__item">
            <img src={zaraIcon} alt="ZARA" />
          </div>

          <div className="brands__content__item">
            <img src={annTaylorIcon} alt="Ann Taylor" />
          </div>
        </div>
      </div>
    </section>
  )
}
