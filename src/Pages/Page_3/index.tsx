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
      <h1 className="title_">Transformamos a sua ideia em um produto real.</h1>
     
        <main className="cards_trilha">
          {/* CARS 1 */}
          <div
            className=" card1"
              data-aos="fade-left"
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
          {/* CARS 2 */}
          <div
            className="card2"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src={Img_2 } alt="" />
            <div className="text_card">
              <h1>Oportunidades de Voluntariado</h1>
              <p>
                Participe de projetos voluntário que impactam a comunidade e o
                mundo da tecnologia.
              </p>
            </div>
          </div>
          {/* CARS 3 */}
          <div
            className="card_content card3"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Img_3 } alt="" />
            <div className="text_card">
              <h1>Oportunidades de Voluntariado</h1>
              <p>
                Participe de projetos voluntário que impactam a comunidade e o
                mundo da tecnologia.
              </p>
            </div>
          </div>
          {/* CARS 4 */}
          <div
            className="card_content card4"
             data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img src={Img_4 } alt="" />
            <div className="text_card">
              <h1>Oportunidades de Voluntariado</h1>
              <p>
                Participe de projetos voluntário que impactam a comunidade e o
                mundo da tecnologia.
              </p>
            </div>
          </div>
          
        </main>
      
     
     
    </section>
  );
};
