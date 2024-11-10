import "./Page.style.css";
// IMPORT COMPONENTS
import ThreeDTorus from "../../assets/components/Circle/circle";
// import  Logo from   '../../assets/components/Logo/Logo_animation'
// IMPORT IMG 


// BUTTON
import Button from "../../assets/components/Button/Button";


// src/App.jsx
export default function Page_1() {
  return (
    <section className="section_1">
      {/* CARD 1 */}
      <main className="card_1">
        <h1 className="title_ area-especial">FRONT NA PRÁTICA</h1>
        <div className="mini_cards">
          <div className="card_">
            <h3>Tutotiais, Artigos e Animações</h3>
            <p>
              Descomplicando o Front-End com tutoriais e artigos aprofundados
              sobre tudo, de animações e interatividade a estruturas de layout.
            </p>
            <div className="btn_div">
              <Button />
              <span>
                <a href="">
                  {" "}
                  <i className="bi bi-whatsapp"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="">
                  {" "}
                  <i className="bi bi-github"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="card_">
          {/* < Logo/> */}
      
         
          </div>
        </div>
      </main>
      {/* CARD 2 */}
      <main className="card_2">
        <ThreeDTorus />
      </main>
    </section>
  );
}
