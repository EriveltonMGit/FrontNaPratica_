// IMPORT SCSS
import "./Page_2.style.css";

const Page_2 = () => {
  return (
    <section className="section_2">
      {/* TITULO DO DA SECTION 2 */}
      <h1 className="titulo_page_1">Como Participar: Três Passos Simples</h1>
      <main className="cards_options">
        {/* CARDS PASSOS A SEGUIR */}
        <div className="card_1" data-aos="fade-up" data-aos-duration="1500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="arrow_1 bi bi-caret-right-fill "
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <h1 className="number">01</h1>
          <p>Defina sua Área</p>
        </div>
        {/* CARD 2 */}
        <div className="card_2" data-aos="fade-up" data-aos-duration="2500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-caret-right-fill arrow_2"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <h1>02</h1>
          <p>Faça sua Inscrição</p>
        </div>
        {/* CARD 3 */}

        <div className="card_3" data-aos="fade-up" data-aos-duration="2500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-caret-right-fill arrow_2"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <h1>03</h1>
          <p>Participe Ativamente</p>
        </div>
      </main>
      {/* textos rodapé */}
      <div className="desc_card" data-aos="fade-up" data-aos-duration="2500">
        <p>
          Na Código Certo Coders, oferecemos uma ampla gama de recursos e
          oportunidades para impulsionar seu desenvolvimento pessoal e
          profissional na área de tecnologia. Nosso compromisso é fornecer um
          ambiente que favoreça o aprendizado, a colaboração e a inovação.
        </p>
      </div>
    </section>
  );
};

export default Page_2;
