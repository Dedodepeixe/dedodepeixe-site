function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.82)), radial-gradient(circle at top, #4b3d1d 0%, #111 65%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 60px 80px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
          <p
            style={{
              color: "#d4af37",
              letterSpacing: "8px",
              textTransform: "uppercase",
              fontSize: "14px",
              marginBottom: "18px",
            }}
          >
            Casa de Curadoria
          </p>

          <h1
            style={{
              fontSize: "90px",
              lineHeight: "0.95",
              margin: 0,
              fontFamily: "Georgia, serif",
              color: "#fff",
              textShadow: "0 5px 25px rgba(0,0,0,.35)",
            }}
          >
            Exposição 001
          </h1>

          <h2
            style={{
              marginTop: "22px",
              fontWeight: "300",
              fontSize: "34px",
              color: "#ececec",
            }}
          >
            Pote Tarsila do Amaral
          </h2>

          <p
            style={{
              marginTop: "35px",
              maxWidth: "560px",
              lineHeight: "2",
              color: "#d4d4d4",
              fontSize: "18px",
            }}
          >
            Uma experiência digital criada para preservar e apresentar uma peça
            única através da pesquisa, documentação e curadoria da Casa de
            Curadoria Dedo de Peixe.
          </p>

          <button
            style={{
              marginTop: "45px",
              padding: "18px 42px",
              background: "#d4af37",
              color: "#111",
              border: "none",
              borderRadius: "999px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 10px 35px rgba(212,175,55,.35)",
              transition: ".35s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Explorar a Exposição
          </button>
        </div>

        {/* FOTO */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/tarsila-principal.jpg"
            alt="Pote Tarsila do Amaral"
            style={{
              width: "430px",
              height: "560px",
              objectFit: "cover",
              borderRadius: "30px",
              border: "2px solid rgba(212,175,55,.45)",
              boxShadow:
                "0 40px 90px rgba(0,0,0,.6), 0 0 40px rgba(212,175,55,.12)",
              transition: "all .45s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 45px 100px rgba(0,0,0,.7),0 0 70px rgba(212,175,55,.28)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 40px 90px rgba(0,0,0,.6),0 0 40px rgba(212,175,55,.12)";
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;