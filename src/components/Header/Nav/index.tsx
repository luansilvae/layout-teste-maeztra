import React from "react"

import "./Nav.scss"

export const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Novidades
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Vestidos
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Roupas
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Sapatos
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Lingerie
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            Acessórios
          </a>
        </li>
        <li className="nav-list__item">
          <a href="#" className="nav-list__item__link">
            OUTLET
          </a>
        </li>
      </ul>
    </nav>
  )
}
