function Experience() {
  return (
    <section
      style={{
        background: "#f7f4ee",
        padding: "140px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#b8860b",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          A Experiência
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "58px",
            color: "#111",
            marginBottom: "70px",
          }}
        >
          O que acompanha a Obra
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "35px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "22px",
              boxShadow: "0 20px 60px rgba(0,0,0,.08)",
            }}
          >
            <h3>🫙</h3>

            <h4
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
              }}
            >
              A Obra
            </h4>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Pote hermético da Exposição 001 inspirado em Tarsila do Amaral.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "22px",
              boxShadow: "0 20px 60px rgba(0,0,0,.08)",
            }}
          >
            <h3>📜</h3>

            <h4
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
              }}
            >
              Certificado
            </h4>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Certificado de autenticidade emitido pela Casa de Curadoria.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "22px",
              boxShadow: "0 20px 60px rgba(0,0,0,.08)",
            }}
          >
            <h3>📦</h3>

            <h4
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
              }}
            >
              Embalagem
            </h4>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Caixa exclusiva desenvolvida especialmente para esta coleção.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "22px",
              boxShadow: "0 20px 60px rgba(0,0,0,.08)",
            }}
          >
            <h3>🚚</h3>

            <h4
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "24px",
              }}
            >
              Envio
            </h4>

            <p style={{ lineHeight: "1.8", color: "#555" }}>
              Envio para todo o Brasil com cálculo de frete em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;