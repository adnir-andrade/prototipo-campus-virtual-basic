import React from 'react';
import { Link } from 'react-router-dom';

import {
  AiOutlineSchedule,
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineCar,
  AiOutlineQuestionCircle,
  AiOutlineMail,
  AiFillGithub,
  AiOutlineYoutube,
  // AiOutlineFileText,
  // AiOutlineFilePdf,
  // AiOutlineCheckSquare,
  // AiOutlineTrophy,
} from 'react-icons/ai';
// import { BiWrench } from 'react-icons/bi';
// import { BsFileEarmarkSlides } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

import { MdFiberNew } from 'react-icons/md';

import icEVIN from '../../assets/icons/icEVIN.png';

import './styles.css';

import { ModalContext } from '../modal';
import modalContents from '../modal-contents';

import externalURLs from '../../services/external-urls';

const TagNew = () => (
  <div style={{ color: 'red', marginLeft: 8 }}>
    <MdFiberNew />
  </div>
);

export default function MainMenu(props) {
  const modal = React.useContext(ModalContext);

  return (
    <>
      <h2>Menu Principal</h2>

      <div className="link-list">
        <div
          className="link"
          onClick={() => modal.show(modalContents['calendar-svg'])}
        >
          <AiOutlineCalendar />
          Datas Importantes
        </div>

        <Link to="/prog" className="link">
          <AiOutlineSchedule /> Exemplo de Programação
        </Link>

        <Link to="/schedule" className="link">
          <AiOutlineClockCircle /> Exemplo Planilha
        </Link>
      </div>

      <h2>Instruções</h2>

      <div className="link-list">
        <Link to="/faq" className="link">
          <AiOutlineQuestionCircle />
          FAQ - Dúvidas Frequentes
        </Link>
      </div>

      <h2>Geral</h2>

      <div className="link-list">
        <div
          className="link"
          onClick={() => modal.show(modalContents['video-teaser'])}
        >
          <AiOutlineYoutube /> Exemplo Video
        </div>

        <div
          className="link"
          onClick={() => modal.show(modalContents['comissoes'])}
        >
          <FiUsers /> Exemplo Lista
        </div>

        <Link to="/citytour" className="link">
          <AiOutlineCar /> City Tour
        </Link>

        <div
          href="#"
          className="link"
          onClick={() => modal.show(modalContents['sponsor'])}
        >
          <FaRegHandshake />
          Apoiadores
        </div>

        <div
          className="link"
          onClick={() => modal.show(modalContents['contact'])}
        >
          <AiOutlineMail /> Contato
        </div>

        <div
          className="link"
          onClick={() => modal.show(modalContents['post-event-message'])}
        >
          <AiFillGithub />
          O Campus Virtual é Seu!
          <TagNew />
        </div>
      </div>
    </>
  );
}
