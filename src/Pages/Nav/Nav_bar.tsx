



import './Nav.style.css'
// IMPORT SVG LOGO
import Logo from '../../assets/img/icons/logo.svg';

// IMPORT COMPONENTS

export default function Nav() {
    return (
      <section className="nav_bar">
        {/* AQUI FICA A LOGO */}
        <main className="logo">
        <img src={Logo} alt="Logo" /> {/* Usando o SVG como uma imagem */}
        </main>
  
        <ul className="ul_nav">
          <li>
            <a href="#inicio">
              <i className="bi bi-house"></i>Início
            </a>
          </li>
          <li>
            <a href="#vagas">
              <i className="bi bi-file-earmark-text"></i>Vagas
            </a>
          </li>
          <li>
            <a href="#trilhas">
              <i className="bi bi-card-checklist"></i>Trilhas
            </a>
          </li>
          <li>
            <a href="#eventos">
              <i className="bi bi-star text"></i>Eventos
            </a>
          </li>
          <li>
            <a href="#projetos">
              <i className="bi bi-substack"></i>Projetos
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-ui-radios-grid"></i>Hackathon
            </a>
          </li>
          <li>
            <a href="#contato">
              <i className="bi bi-person-lines-fill"></i>Contato
            </a>
          </li>
  
          <button className="btn_login">
            <span>Login</span>
          </button>
        </ul>

        <button className="btn_menu_device">
            <span><i className="bi bi-list"></i></span>
          </button>
  
      </section>
    );
  }