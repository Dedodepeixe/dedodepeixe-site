function Highlights() {
  return (
    <section
      id="curadoria"
      style={{
        background: "#111",
        color: "white",
        padding: "150px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#d4af37",
            letterSpacing: "8px",
            textTransform: "uppercase",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Curadoria de Excelência
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "62px",
            marginBottom: "25px",
          }}
        >
          Muito além de uma coleção
        </h2>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto 90px",
            color: "#cfcfcf",
            lineHeight: "2",
            fontSize: "19px",
          }}
        >
          Cada objeto apresentado pela Casa de Curadoria Dedo de Peixe passa
          por um processo rigoroso de pesquisa, documentação e preservação,
          proporcionando uma experiência única ao visitante.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "35px",
          }}
        >
          <div
            style={{
              background: "#1b1b1b",
              padding: "55px 40px",
              borderRadius: "24px",
              border: "1px solid rgba(212,175,55,.25)",
            }}
          >
            <div style={{ fontSize: "55px" }}>🏺</div>

            <h3
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                color: "#d4af37",
                fontFamily: "Georgia, serif",
                fontSize: "30px",
              }}
            >
              Curadoria
            </h3>

            <p
              style={{
                color: "#d6d6d6",
                lineHeight: "2",
              }}
            >
              Cada peça é escolhida por sua importância histórica,
              autenticidade e relevância cultural.
            </p>
          </div>

          <div
            style={{
              background: "#1b1b1b",
              padding: "55px 40px",
              borderRadius: "24px",
              border: "1px solid rgba(212,175,55,.25)",
            }}
          >
            <div style={{ fontSize: "55px" }}>📜</div>

            <h3
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                color: "#d4af37",
                fontFamily: "Georgia, serif",
                fontSize: "30px",
              }}
            >
              Documentação
            </h3>

            <p
              style={{
                color: "#d6d6d6",
                lineHeight: "2",
              }}
            >
              Fotografias, pesquisas e registros preservam toda a trajetória
              da obra apresentada.
            </p>
          </div>

          <div
            style={{
              background: "#1b1b1b",
              padding: "55px 40px",
              borderRadius: "24px",
              border: "1px solid rgba(212,175,55,.25)",
            }}
          >
            <div style={{ fontSize: "55px" }}>✨</div>

            <h3
              style={{
                marginTop: "30px",
                marginBottom: "20px",
                color: "#d4af37",
                fontFamily: "Georgia, serif",
                fontSize: "30px",
              }}
            >
              Experiência
            </h3>

            <p
              style={{
                color: "#d6d6d6",
                lineHeight: "2",
              }}
            >
              Cada exposição é desenvolvida para proporcionar uma visita
              digital elegante e memorável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;