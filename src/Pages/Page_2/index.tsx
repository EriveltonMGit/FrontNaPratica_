// IMPORT SCSS
import "./Page_2.style.css";

const Page_2 = () => {
  return (
    <section className="section_2" id="quemsomos">
      {/* TITULO DO DA SECTION 2 */}
      <h1 className="titulo_page_1">Por que escolher a FULL DEV?</h1>
      {/* CARD 1 */}
      <main className="conten_1">
        <p>
          {" "}
          Somos uma comunidade de desenvolvedores e entusiastas da tecnologia
          comprometidos em criar um futuro mais inovador e acessível. Nossa
          missão é fornecer recursos de aprendizado de qualidade, conectando
          pessoas e projetos que fazem a diferença no mundo digital. Seja você
          um iniciante ou um profissional experiente, oferecemos uma plataforma
          onde você pode aprender, compartilhar e evoluir.
        </p>
      </main>
      {/* content 2 */}
      <main className="conten_2">
        <h3>Como Participar: Três Passos Simples</h3>
        <div className="cards_">
          {/* card 1 */}
          <div className="card">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            
            fill="currentColor"
            className="arrow_1 bi bi-caret-right-fill "
            viewBox="0 0 16 16"
          >
            <path  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <h1 className="number">01</h1>
          <p>Defina sua Área de Atuação</p>
          <span>Escolha sua paixão, encontre seu foco de desenvolvimento.</span>
          </div>
          {/* card 2 */}
          <div className="card">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            
            fill="currentColor"
            className="arrow_1 bi bi-caret-right-fill "
            viewBox="0 0 16 16"
          >
            <path  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <h1 className="number">02</h1>
          <p>Realize sua inscrição</p>
          <span>Inscreva-se e comece a contribuir com projetos reais.</span>
          </div>
          {/* card 3 */}
          <div className="card">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            
            fill="currentColor"
            className="arrow_1 bi bi-caret-right-fill "
            viewBox="0 0 16 16"
          >
            <path  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
          <h1 className="number">03</h1>
          <p>Participe Ativamente</p>
          <span>Seja um agente de transformação, contribua e cresça com a comunidade.</span>
          </div>
          

        </div>

      </main>
    </section>
  );
};

export default Page_2;
