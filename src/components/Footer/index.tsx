import React from "react"

import "./Footer.scss"

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MaeztraLogo,
  MastercardIcon,
  VTEXLogo,
  VisaIcon,
  YoutubeIcon
} from "../../components/Icons"

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="links">
          <ul className="list">
            <li className="list__title">Informações</li>
            <li>Quem Somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devoluções</li>
            <li>Promoções e Cupons</li>
          </ul>

          <ul className="list">
            <li className="list__title">Minha Conta</li>
            <li>Minha Conta</li>
            <li>Meus Pedidos</li>
            <li>Cadastre-se</li>
          </ul>

          <ul className="list">
            <li className="list__title">Onde nos Encontrar</li>
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <ul className="footer__bottom-list">
          <li>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <LinkedinIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <YoutubeIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <VisaIcon />
            </a>
            <a href="#">
              <MastercardIcon />
            </a>
            <a href="#">
              <VisaIcon />
            </a>
            <a href="#">
              <MastercardIcon />
            </a>
          </li>
          <li>
            <a href="#" aria-label="VTEX LOGO" title="Logo VTEX">
              <small>Powered By</small>
              <VTEXLogo />
            </a>

            <a href="#" aria-label="Home page" title="Logo Maeztra">
              <small>Developed By</small>
              <MaeztraLogo />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
