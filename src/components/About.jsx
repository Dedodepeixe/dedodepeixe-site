function About() {
  return (
    <section
      id="sobre"
      style={{
        background: "#f7f4ee",
        padding: "140px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#b8860b",
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            NOSSA ESSÊNCIA
          </p>

          <h2
            style={{
              fontSize: "58px",
              fontFamily: "Georgia, serif",
              lineHeight: "1.15",
              marginBottom: "35px",
              color: "#1c1c1c",
            }}
          >
            Preservar histórias.
            <br />
            Compartilhar legado.
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "2",
              color: "#555",
              marginBottom: "35px",
            }}
          >
            A Casa de Curadoria Dedo de Peixe nasceu para preservar objetos que
            carregam memória, autenticidade e valor cultural. Cada exposição é
            cuidadosamente construída para revelar não apenas uma peça, mas sua
            história completa.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "2",
              color: "#777",
            }}
          >
            Nossa proposta é unir pesquisa, documentação e design em uma
            experiência digital elegante, permitindo que cada visitante descubra
            detalhes que normalmente permaneceriam invisíveis.
          </p>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "22px",
            padding: "50px",
            border: "1px solid rgba(212,175,55,.30)",
            boxShadow: "0 25px 60px rgba(0,0,0,.08)",
          }}
        >
          <h3
            style={{
              color: "#b8860b",
              fontSize: "32px",
              fontFamily: "Georgia, serif",
              marginBottom: "25px",
            }}
          >
            Nossa Missão
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "2",
              marginBottom: "35px",
            }}
          >
            Transformar cada exposição em um registro permanente da história de
            uma peça, preservando sua identidade para pesquisadores,
            colecionadores e amantes da arte.
          </p>

          <div
            style={{
              height: "1px",
              background: "#e5e5e5",
              marginBottom: "30px",
            }}
          />

          <h4
            style={{
              color: "#b8860b",
              letterSpacing: "3px",
              marginBottom: "15px",
            }}
          >
            CASA DE CURADORIA
          </h4>

          <p
            style={{
              color: "#777",
              lineHeight: "1.8",
            }}
          >
            Um espaço criado para preservar histórias através da curadoria.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;