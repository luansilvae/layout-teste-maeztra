import React from "react"

import "./Footer.scss"

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MaeztraLogo,
  MastercardIcon,
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
              <img src="https://s3-alpha-sig.figma.com/img/63b8/54bd/0b5cea783a690408465314bfaac62d5e?Expires=1700438400&Signature=FLDwghWntvdfBoHKJKi2i0P81-E9QhO0xvTuc5atjv6nAIq2kWYiAIm4ZhTacD5AHKp8d8sK~dASasXVBKspRLW6094oVT8dBHxpD3PXCGZ1nwTI9b6Y~9wwmrbljXOnosrPgk822-ZbBmR7avukPzmDBPEIdCyC1H6DXlFZP0egMVNaOWHmxTUAypAaSCRhS-kgN1vYr92CpDpREsJ9Vnzh0RIGx4pHAwFIe1hjAS6mxNTvTpP-GaYaf5rWHlnkxTrjagx17XvIn1yWec7Hqw6OX8HIqrmkFNONclNPPfWtqluPZ~97IsalCOllFAdQ2iVcCvh6qy5Lc~MgjBBQZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="VTEX ICON" />
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
