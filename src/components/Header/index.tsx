import React, { useCallback, useState } from "react"
import "./Header.scss"

import LogoMaeztra from "../../assets/logo.svg"

import { WishIcon, UserIcon, CartIcon, MenuIcon } from "../Icons"
import { Search } from "../Search"
import { Nav } from "./Nav"
import { Cart } from "./Cart"
import { useCart } from "../../hooks/useCart"

export const Header: React.FC = () => {
  const [openCart, setOpenCart] = useState<boolean>(false)
  const { amountProducts } = useCart()
  const handleOpenCart = useCallback(() => setOpenCart(state => !state), [])

  return (
    <header className="header">
      <div className="header__topBar">
        <p className="header__topBar-text">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>

      <div className="header__container">
        <div className="header__content">
          <button className="toggle-menu-button">
            <MenuIcon />
          </button>
          <a href="#" className="logo">
            <img src={LogoMaeztra} alt="Logo Maeztra" className="logo__img" />
          </a>

          <Search className="search--desktop" />

          <div className="header-menu">
            <ul className="header-menu__desktop">
              <li className="menu-item menu-item--user">
                <UserIcon /> Minha conta
              </li>
              <li className="menu-item">
                <WishIcon /> Favoritos
              </li>
            </ul>

            <Search className="search--mobile" />

            <button className="cart-button" onClick={handleOpenCart}>
                <CartIcon />
              <span className="cart-button--text">
                Meu Carrinho
              </span>

              {
                amountProducts > 0 && (
                  <span className="cart-button--amount">{amountProducts}</span>
                )
              }
            </button>

            <Cart openCart={openCart} />
          </div>
        </div>
      </div>

      <Nav />
    </header>
  )
}
