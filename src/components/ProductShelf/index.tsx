import React, { useState } from "react"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { useCart } from "../../hooks/useCart"
import { useProducts } from "../../hooks/useProducts"
import { formattedCurrency } from "../../utils/formattedCurrency"
import { notify } from "../../utils/notify"

import "./ProductShelf.scss"
import "swiper/scss"
import "swiper/scss/navigation"

export const ProductShelf: React.FC = () => {
  const { products } = useProducts()
  const { handleAddToCart } = useCart()

  const [selectedVariation, setSelectedVariation] = useState<number | null>(
    null
  )

  const handleVariationClick = (index: number) => {
    setSelectedVariation(index)
  }

  return (
    <section className="shelf">
      <h1 className="shelf__title">As Mais Pedidas</h1>
      <Swiper
        className="shelf__carousel"
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={16}
        preventClicks={true}
        preventClicksPropagation={true}
        preventInteractionOnTransition={true}
        loopPreventsSlide={true}
        grabCursor={false}
        loop
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          980: {
            slidesPerView: 3
          },
          1300: {
            slidesPerView: 5
          }
        }}
      >
        {products &&
          products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="carousel__item product">
                <div className="item__banner">
                  <img src={product.image} alt="Produto 1" />
                </div>
                <div className="item__content">
                  <ul className="product__variation">
                    {product.variations.map(variation => (
                      <li
                        key={variation.id}
                        className={`product__variation--item ${
                          variation.id === selectedVariation ? "selected" : ""
                        }`}
                      >
                        <button
                          type="button"
                          className="product__variation--button"
                          style={{
                            backgroundColor: variation.color,
                            border:
                              variation.id === selectedVariation
                                ? "1px solid #000"
                                : `1px solid ${variation.color}`
                          }}
                          onClick={() => handleVariationClick(variation.id)}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="item__content__price">
                    <strong className="price__info">
                      {formattedCurrency(product.price.actualValue)}
                    </strong>
                  </div>

                  <span className="item__content__description">
                    <strong>{product.name}</strong>
                    <span>{product.description}</span>
                  </span>

                  <button
                    className="item__content__add-to-cart"
                    onClick={() => {
                      handleAddToCart(product.id)
                      notify("Produto adicionado ao carrinho")
                    }}
                  >
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
