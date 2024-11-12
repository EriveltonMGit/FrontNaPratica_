import "./Page_3.css";
// IMPORT COMPONENTS 

// import imagens
import Img_1 from '../../assets/img/page_2/img_1.webp'
import Img_2 from '../../assets/img/page_2/img_2.webp'
import Img_3 from '../../assets/img/page_2/img_3.webp'
import Img_4 from '../../assets/img/page_2/img_4.webp'


export default function Page_3  () {
  return (
    <section className="section_3">
      <main className="cards-container">
        <div className="cards_trilha">
          {/* CARS 1 */}
          <div
            className="card_content card1"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Img_1 } alt="" />
            <div className="text_card">
              <h1>Oportunidades de Voluntariado</h1>
              <p>
                Participe de projetos voluntário que impactam a comunidade e o
                mundo da tecnologia.
              </p>
            </div>
          </div>
          {/* CARD 2 */}
          <div
            className="card_content card2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={Img_2} alt="" />
            <div className="text_card">
              <h1>Recursos de Aprendizado</h1>
              <p>
                Acesse uma vasta biblioteca de tutoriais, cursos online e
                materiais de estudo.
              </p>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="cards_trilha ">
          <div
            className="card_content card3"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Img_3} alt="" />
            <div className="text_card">
              <h1>Programas de Mentoria</h1>
              <p>
                Conecte-se com mentores experientes que irão guiar seu
                desenvolvimento profissional.
              </p>
            </div>
          </div>
          <div
            className="card_content card4"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={Img_4} alt="" />
            <div className="text_card">
              <h1>Networking e Eventos</h1>
              <p>
                Participe de eventos e sessões de networking para expandir sua
                rede profissional
              </p>
            </div>
          </div>
        </div>
      </main>
     
    </section>
  );
};
