import { useState } from "react";

function Checkout() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");

  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");

  async function buscarCEP(valor) {
    setCep(valor);

    const cepLimpo = valor.replace(/\D/g, "");

    if (cepLimpo.length !== 8) return;

    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      const dados = await resposta.json();

      if (dados.erro) return;

      setRua(dados.logradouro || "");
      setBairro(dados.bairro || "");
      setCidade(dados.localidade || "");
      setEstado(dados.uf || "");
    } catch (erro) {
      console.log(erro);
    }
  }

  function continuar() {
    if (!nome || !email || !cep || !numero) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const mensagem = `🖼️ *Novo Pedido - Dedo de Peixe*

Nome: ${nome}

E-mail: ${email}

CEP: ${cep}

Endereço:
${rua}, Nº ${numero}

${bairro}

${cidade} - ${estado}

Complemento:
${complemento}

Produto:
Exposição 001
Pote Tarsila do Amaral

Valor:
R$100,00`;

    window.open(
      `https://wa.me/5571996938788?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f4ee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        }}
      >
        <h1
          style={{
            fontFamily: "Georgia, serif",
            marginBottom: "10px",
          }}
        >
          Exposição 001
        </h1>

        <h2
          style={{
            fontWeight: "normal",
            marginBottom: "30px",
          }}
        >
          Pote Tarsila do Amaral
        </h2>

        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={(e) => buscarCEP(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        /><input
          type="text"
          placeholder="Rua"
          value={rua}
          readOnly
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Complemento (Casa, Apto, Bloco...)"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Bairro"
          value={bairro}
          readOnly
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          readOnly
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Estado"
          value={estado}
          readOnly
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "30px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={continuar}
          style={{
            width: "100%",
            padding: "18px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Enviar Pedido pelo WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Checkout;