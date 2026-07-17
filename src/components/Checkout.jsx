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
  
  // Estado para controlar o carregamento do botão
  const [carregando, setCarregando] = useState(false);

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

  async function continuar() {
    if (!nome || !email || !cep || !numero) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    setCarregando(true);

    try {
      // Faz a requisição para a nossa nova API interna
      const resposta = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          cep,
          rua,
          numero,
          bairro,
          cidade,
          estado,
          complemento,
          produto: "Pote Tarsila do Amaral - Exposição 001",
          preco: 100.00
        }),
      });

      const dados = await resposta.json();

      if (dados.url) {
        // Redireciona para o Mercado Pago seguro
        window.location.href = dados.url;
      } else {
        throw new Error(dados.error || "Erro ao gerar pagamento.");
      }
    } catch (erro) {
      console.error(erro);
      alert("Houve um erro ao processar o pagamento. Tente novamente.");
    } finally {
      setCarregando(false);
    }
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
        />

        <input
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
          disabled={carregando}
          style={{
            width: "100%",
            padding: "18px",
            background: carregando ? "#ccc" : "#111",
            color: "#fff",
            border: "none",
            borderRadius: "999px",
            cursor: carregando ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {carregando ? "Processando..." : "Ir para o Pagamento"}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
