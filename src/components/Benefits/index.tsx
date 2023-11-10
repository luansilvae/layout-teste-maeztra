import React from "react"

import "./Benefits.scss"

import importadosIcon from "../../assets/importados.png"
import descontoIcon from "../../assets/desconto.png"
import estoqueIcon from "../../assets/estoque.png"
import freteIcon from "../../assets/frete-gratis.png"
import trocasIcon from "../../assets/trocas.png"

export const Benefits: React.FC = () => {
  return (
    <section className="benefits">
      <h2 className="benefits__title">Por que comprar na Maeztra?</h2>
      <div className="benefits__container">
        <div className="benefits__content">
          <div className="benefits__content__item">
            <img src={importadosIcon} alt="Produtos importados" />
            <span>
              <strong>Produtos importados</strong>
              <small>Produto de Alta Qualidade</small>
            </span>
          </div>

          <div className="benefits__content__item">
            <img src={estoqueIcon} alt="Estoque no Brasil" />
            <span>
              <strong>Estoque no Brasil</strong>
              <small>Produtos mais perto de você!</small>
            </span>
          </div>

          <div className="benefits__content__item">
            <img src={trocasIcon} alt="Trocas Garantidas" />
            <span>
              <strong>Trocas Garantidas</strong>
              <small>Trocas em até 48 horas, vejas as regras</small>
            </span>
          </div>

          <div className="benefits__content__item">
            <img src={descontoIcon} alt="Ganhe 5% off" />
            <span>
              <strong>Ganhe 5% off</strong>
              <small>Pagando à vista no Cartão</small>
            </span>
          </div>

          <div className="benefits__content__item">
            <img src={freteIcon} alt="Frete Grátis" />
            <span>
              <strong>Frete Grátis</strong>
              <small>Em compras acima de R$ 499,00</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
