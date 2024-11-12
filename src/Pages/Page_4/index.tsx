import "./Page_4.css";

export default function Page_4() {
  return (
    <section className="section_4" id="projetos">
      <div className="titulo_">
        <h1> Histórias de Sucesso</h1>
        <p>
          
          Veja como a Código Certo Coders está impactando a vida de nossos
          membros.
        </p>
      </div>

      {/* CARD 1 */}
      <section className="container_">
      <main className="card_1" data-aos="fade-right" data-aos-duration="2500">
        <div className="mini_cards">
         <div>
         <h3>
            <b>Membro:</b> Julia Santos
            <i className="bi bi-person-bounding-box"></i>
          </h3>
          <span className="spn">Projeto:</span>
          <p>
            Descrição: Julia desenvolveu um sistema de feedback que permite aos
            membros da comunidade avaliar eventos e atividades, contribuindo
            para melhorias contínuas.
          </p>
          <p>
            Citação: "Participar deste projeto me ajudou a aprimorar minhas
            habilidades em web design e a conhecer pessoas incríveis!"
          </p>

          <button className="btn_projeto">
            <span>Projeto</span>
          </button>
         </div>
        </div>
      </main>
      {/* CARD 2 */}
      <main className="card_2" data-aos="fade-left" data-aos-duration="2500">
        <div className="mini_cards">
          <div>
            <h3>
              <b>Membro:</b> Eduardo Santos{" "}
              <i className="bi bi-person-bounding-box"></i>
            </h3>
            <span className="spn">Projeto:</span>
            <p>
              Descrição: Eduardo desenvolveu um sistema de feedback que permite
              aos membros da comunidade avaliar eventos e atividades,
              contribuindo para melhorias contínuas.
            </p>
            <p>
              Citação: "Participar deste projeto me ajudou a aprimorar minhas
              habilidades em web design e a conhecer pessoas incríveis!"
            </p>

            <button className="btn_projeto">
              <span>Projeto</span>
            </button>
          </div>
        </div>
      </main>
      </section>
     

      {/*Call to Action:  */}
      <div className="action">
        <h3>
          Inspire-se e junte-se a nós! Quais são suas ideias para a próxima
          trilha?
        </h3>
      </div>
    </section>
  );
}
