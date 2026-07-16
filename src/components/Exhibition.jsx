function Exhibition() {
  return (
    <section
      style={{
        background: "#111",
        color: "white",
        padding: "100px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "60px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            height: "450px",
            background: "#222",
            border: "2px dashed #555",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#888",
            fontSize: "20px",
          }}
        >
          FOTO DO POTE
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "300px",
          }}
        >
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "4px",
            }}
          >
            EXPOSIÇÃO 001
          </p>

          <h2
            style={{
              fontSize: "52px",
              margin: "10px 0",
              fontFamily: "Georgia, serif",
            }}
          >
            Pote Tarsila do Amaral
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "18px",
              color: "#ddd",
            }}
          >
            Uma peça singular, cuidadosamente selecionada para inaugurar a
            Casa de Curadoria Dedo de Peixe. Cada detalhe desta obra representa
            a união entre história, design e valor cultural.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "16px 34px",
              border: "1px solid #d4af37",
              background: "transparent",
              color: "#d4af37",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </section>
  );
}

export default Exhibition;