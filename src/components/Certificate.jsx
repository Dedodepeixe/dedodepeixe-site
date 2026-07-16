function Certificate() {
  return (
    <section
      style={{
        background: "#f7f4ee",
        padding: "140px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          border: "2px solid #d4af37",
          padding: "60px",
          background: "white",
          boxShadow: "0 25px 70px rgba(0,0,0,.12)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            letterSpacing: "6px",
            color: "#b8860b",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
        >
          Casa de Curadoria
        </p>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "46px",
            marginBottom: "30px",
            color: "#111",
          }}
        >
          Certificado de Autenticidade
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "2",
            color: "#555",
            maxWidth: "650px",
            margin: "0 auto 40px",
          }}
        >
          Esta peça faz parte da Exposição 001 da Casa de Curadoria
          Dedo de Peixe. Cada exemplar é produzido em edição limitada,
          acompanhado de curadoria e identidade própria.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            marginTop: "40px",
            textAlign: "left",
          }}
        >
          <div>
            <strong>Obra</strong>
            <p>Pote Tarsila do Amaral</p>
          </div>

          <div>
            <strong>Exposição</strong>
            <p>001 — Visual Art Culture</p>
          </div>

          <div>
            <strong>Curadoria</strong>
            <p>Dedo de Peixe</p>
          </div>

          <div>
            <strong>Edição</strong>
            <p>Limitada</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            borderTop: "1px solid #ddd",
            paddingTop: "30px",
          }}
        >
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "26px",
              color: "#111",
            }}
          >
            Dedo de Peixe
          </p>

          <small style={{ color: "#777" }}>
            Casa de Curadoria
          </small>
        </div>
      </div>
    </section>
  );
}

export default Certificate;