function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(15,15,15,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(212,175,55,.18)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "22px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#d4af37",
            margin: 0,
            fontFamily: "Georgia, serif",
            fontSize: "30px",
            letterSpacing: "1px",
          }}
        >
          Dedo de Peixe
        </h2>

        <nav
          style={{
            display: "flex",
            gap: "35px",
          }}
        >
          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Início
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Exposição
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Curadoria
          </a>

          <a
            href="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;