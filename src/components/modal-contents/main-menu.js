import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

import externalURLs from "../../services/external-urls";

export default function MainMenu(props) {
  return (
    <div className="modal-contents">
      <h1>Menu Principal</h1>

      <h2>Geral</h2>

      <div className="link-list">
        <Link to="/schedule" className="link">
          Agenda de Apresentações
        </Link>

        <Link to="/about" className="link">
          Informações Gerais
        </Link>

        <Link to="/citytour" className="link">
          City Tour
        </Link>
      </div>

      <h2>Participante</h2>

      <div className="link-list">
        <a href={externalURLs["evin-base"]} className="link">
          Portal de Eventos Científicos da UTFPR (EVIN)
        </a>

        <Link to="/faq" className="link">
          Dúvidas Frequentes
        </Link>
      </div>
    </div>
  );
}
