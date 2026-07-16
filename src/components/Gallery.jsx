import { useState } from "react";

function Gallery() {
  const fotos = [
    "/tarsila1.jpg",
    "/tarsila2.jpg",
    "/tarsila3.jpg",
    "/tarsila4.jpg",
    "/tarsila5.jpg",
    "/tarsila6.jpg",
    "/tarsila7.jpg",
    "/tarsila8.jpg",
    "/tarsila9.jpg",
    "/tarsila10.jpg",
    "/tarsila11.jpg",
  ];

  const [fotoAtual, setFotoAtual] = useState(null);

  const abrirFoto = (index) => {
    setFotoAtual(index);
  };

  const fecharFoto = () => {
    setFotoAtual(null);
  };

  const proximaFoto = () => {
    setFotoAtual((fotoAtual + 1) % fotos.length);
  };

  const fotoAnterior = () => {
    setFotoAtual((fotoAtual - 1 + fotos.length) % fotos.length);
  };

  return (
    <>
      <section
        id="galeria"
        style={{
          background: "#111",
          padding: "170px 40px",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1450px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#d4af37",
              letterSpacing: "8px",
              textTransform: "uppercase",
              marginBottom: "15px",
            }}
          >
            Acervo Fotográfico
          </p>

          <h2
            style={{
              textAlign: "center",
              fontFamily: "Georgia, serif",
              fontSize: "62px",
              marginBottom: "80px",
            }}
          >
            A Obra em Detalhes
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "28px",
            }}
          >
            {fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => abrirFoto(index)}
                style={{
                  overflow: "hidden",
                  borderRadius: "24px",
                  border: "1px solid rgba(212,175,55,.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,.35)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={foto}
                  alt=""
                  style={{
                    width: "100%",
                    display: "block",
                    transition: ".4s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {fotoAtual !== null && (
        <div
          onClick={fecharFoto}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <img
            src={fotos[fotoAtual]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "16px",
              boxShadow: "0 0 80px rgba(0,0,0,.8)",
            }}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              fecharFoto();
            }}
            style={{
              position: "absolute",
              top: 30,
              right: 40,
              fontSize: "40px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              fotoAnterior();
            }}
            style={{
              position: "absolute",
              left: 30,
              fontSize: "55px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ❮
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              proximaFoto();
            }}
            style={{
              position: "absolute",
              right: 30,
              fontSize: "55px",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            ❯
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;