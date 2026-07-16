function Footer() {
  return (
    <footer
      style={{
        background: "#0b0b0b",
        color: "#aaa",
        padding: "80px 40px 60px",
        textAlign: "center",
        borderTop: "1px solid rgba(212,175,55,.2)",
      }}
    >
      <p
        style={{
          color: "#d4af37",
          letterSpacing: "6px",
          textTransform: "uppercase",
          marginBottom: "18px",
          fontSize: "13px",
        }}
      >
        Casa de Curadoria
      </p>

      <h2
        style={{
          color: "#fff",
          marginBottom: "25px",
          fontFamily: "Georgia, serif",
          fontSize: "42px",
          fontWeight: "normal",
        }}
      >
        Dedo de Peixe
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "2",
          fontSize: "17px",
        }}
      >
        Colecione histórias.
        <br />
        Preserve momentos.
      </p>

      <div
        style={{
          marginTop: "45px",
          display: "flex",
          justifyContent: "center",
          gap: "35px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#exposicao"
          style={{
            color: "#d4af37",
            textDecoration: "none",
          }}
        >
          Exposição 001
        </a>

        <a
          href="#galeria"
          style={{
            color: "#d4af37",
            textDecoration: "none",
          }}
        >
          Acervo
        </a>

        <a
          href="https://instagram.com/dedodepeixe"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#d4af37",
            textDecoration: "none",
          }}
        >
          Instagram
        </a>
      </div>

      <p
        style={{
          marginTop: "60px",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        © 2026 Casa de Curadoria Dedo de Peixe.
        <br />
        Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;