import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

import BGNewsletter from "../../assets/bg-newsletter.jpg";

import "./WelcomeNewsletter.scss";

const WelcomeNewsletter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasVisited = Cookies.get("newsletterModalShown");
    if (!hasVisited) {
      setIsOpen(true);
      Cookies.set("newsletterModalShown", "true", { expires: 1 });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if ((e.target as HTMLElement).id === "modal") {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div id="modal" className="modal" onClick={handleOutsideClick}>
      <div className="modal__content">
        <button className="modal__close-button" onClick={handleClose}>
          FECHAR
        </button>
        <div className="modal__image">
          <img src={BGNewsletter} alt="Welcome" />
        </div>
        <div className="modal__form">
          <svg
            width="28"
            height="30"
            viewBox="0 0 28 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66659 5.14331H23.3333C24.6166 5.14331 25.6666 6.25558 25.6666 7.61501V22.4452C25.6666 23.8047 24.6166 24.9169 23.3333 24.9169H4.66659C3.38325 24.9169 2.33325 23.8047 2.33325 22.4452V7.61501C2.33325 6.25558 3.38325 5.14331 4.66659 5.14331Z"
              stroke="#231F20"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M25.6666 7.61499L13.9999 16.266L2.33325 7.61499"
              stroke="#231F20"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h3>Bem Vindo à MAEZTRA</h3>

          <h2>Receba em Primeira mão <strong>desconto e ofertas exclusivas</strong></h2>
          <form>
            <input type="email" placeholder="Digite seu e-mail" required />
            <button type="submit">
              ENVIAR  
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3125 0.64064C11.5703 0.500015 11.8516 0.476578 12.1328 0.54689C12.4141 0.617203 12.625 0.757828 12.7891 0.992203C12.9531 1.22658 13.0234 1.50783 12.9766 1.78908L11.5938 10.8828C11.5234 11.2578 11.3359 11.5156 11.0312 11.6797C10.8438 11.7735 10.6797 11.8203 10.4922 11.8203C10.3281 11.8203 10.1875 11.7969 10.0469 11.75L7.42188 10.6485L6.41406 12.0547C6.17969 12.336 5.92188 12.4766 5.59375 12.5C5.26562 12.5235 4.98438 12.4297 4.75 12.2188C4.49219 12.0078 4.375 11.7266 4.375 11.375V9.40627L1.70312 8.28127C1.42188 8.18752 1.21094 8.00002 1.09375 7.71877C0.976562 7.46095 0.953125 7.20314 1.04688 6.92189C1.11719 6.64064 1.28125 6.4297 1.5625 6.26564L11.3125 0.64064ZM5.5 11.375L6.36719 10.2031L5.5 9.85158V11.375ZM10.4922 10.6953L11.875 1.62502L2.125 7.25002L4.65625 8.3047L9.60156 3.96877C9.69531 3.87502 9.8125 3.85158 9.95312 3.89845C10.0703 3.94533 10.1641 4.01564 10.2109 4.13283C10.2578 4.25002 10.2344 4.3672 10.1641 4.46095L6.88281 9.21877L10.4922 10.6953Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WelcomeNewsletter;
