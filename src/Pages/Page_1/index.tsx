import "./Page.style.css";
// IMPORT COMPONENTS
import ThreeDTorus from "../../assets/components/Circle/circle";
// IMG 
import ScrollArrow  from '../../assets/components/Arrow_Scroll/Arrow_scrool'

import { useEffect } from "react";
import { gsap } from "gsap";


export default function Page_1() {
 useEffect(() => {
        const handleScroll_2 = () => {
          console.log("Scrolling");
          const scrollPosition = window.scrollY;
          const text_1 = document.querySelectorAll(".text_1");
          gsap.to(text_1, { y: scrollPosition * -0.4, duration: 0.8 });
    
          const text_2 = document.querySelector(".text_2");
          if (text_2) {
            gsap.to(text_2, { x: -scrollPosition * 0.5, duration: 0.5 });
          }
         
        };
    
        window.addEventListener("scroll", handleScroll_2);
    
        return () => {
          window.removeEventListener("scroll", handleScroll_2);
        };
      }, []);


  return (
    <section className="section_1" data-aos="zoom-out" data-aos-duration="2000">
      {/* CARD 1 */}
      <main className="card_1">
        <h1 className="title_ area-especial text_1">Construindo o 
        amanhã,hoje.</h1>
        <div className="mini_cards ">
          <div className="card_ ">
            <h3>Codigo Certo Coders</h3>
            <h3>Transformando desafios em soluções digitais.</h3>
            <p>
              Descomplicando o Front-End com tutoriais e artigos aprofundados
              sobre tudo, de animações e interatividade a estruturas de layout.
            </p>
            <div className="btn_div">
             {/* <Button /> */}
             <button className="button button-custom">VAGAS </button>

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
        
        </div>
      </main>
      {/* CARD 2 */}
      <main className="card_2 ">
        <ThreeDTorus />
      </main>
      {/* ARROW */}
    <ScrollArrow />
    </section>
  );
}
