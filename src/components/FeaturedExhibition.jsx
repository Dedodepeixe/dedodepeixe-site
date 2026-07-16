import { Link } from "react-router-dom";

function FeaturedExhibition() {
  return (
    <section
      id="exposicao"
      style={{
        background: "#f7f4ee",
        padding: "150px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1350px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#b8860b",
            letterSpacing: "8px",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "18px",
            fontSize: "14px",
          }}
        >
          Exposição Permanente
        </p>

        <h2
          style={{
            textAlign: "center",
            fontFamily: "Georgia, serif",
            fontSize: "64px",
            marginBottom: "80px",
            color: "#1d1d1d",
          }}
        >
          Pote Tarsila do Amaral
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "70px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "28px",
              overflow: "hidden",
              boxShadow: "0 35px 90px rgba(0,0,0,.18)",
              border: "2px solid rgba(212,175,55,.25)",
            }}
          >
            <video
              src="/tarsila-obra.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "38px",
                fontFamily: "Georgia, serif",
                marginBottom: "30px",
                color: "#222",
              }}
            >
              A primeira obra da coleção
            </h3>

            <p
              style={{
                lineHeight: "2",
                color: "#555",
                fontSize: "18px",
                marginBottom: "35px",
              }}
            >
              A Exposição 001 inaugura oficialmente a Casa de Curadoria Dedo de
              Peixe.
              <br />
              <br />
              Inspirado na estética de Tarsila do Amaral, este pote representa
              o encontro entre arte brasileira, design contemporâneo e produção
              artesanal.
              <br />
              <br />
              Cada detalhe foi pensado para transformar um objeto funcional em
              uma peça de coleção.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "28px",
                marginTop: "40px",
              }}
            >
              <div>
                <h4 style={{ color: "#b8860b" }}>Exposição</h4>
                <p>001</p>
              </div>

              <div>
                <h4 style={{ color: "#b8860b" }}>Coleção</h4>
                <p>Visual Art Culture</p>
              </div>

              <div>
                <h4 style={{ color: "#b8860b" }}>Curadoria</h4>
                <p>Dedo de Peixe</p>
              </div>

              <div>
                <h4 style={{ color: "#b8860b" }}>Status</h4>
                <p>Disponível</p>
              </div>
            </div>

            <Link
              to="/checkout"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                style={{
                  marginTop: "45px",
                  padding: "18px 42px",
                  borderRadius: "999px",
                  border: "none",
                  background: "#111",
                  color: "white",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                Adquirir esta Obra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedExhibition;