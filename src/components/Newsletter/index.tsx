import React from "react"

import "./Newsletter.scss"

export const Newsletter: React.FC = () => {
  return (
    <section className="newsletter">
      <form className="newsletter__form">
        <h1>Receba Nossa Newsletter</h1>
        <div className="newsletter__input">
          <input type="text" placeholder="Digite seu e-mail" />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  )
}
