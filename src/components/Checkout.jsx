export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, email, cep, rua, numero, produto, preco } = req.body;

  try {
    const respostaMp = await fetch("https://api.mercadopago.com/v1/checkout/preferences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            title: produto,
            quantity: 1,
            unit_price: Number(preco),
            currency_id: "BRL",
          },
        ],
        payer: {
          name: nome,
          email: email,
          address: {
            zip_code: cep,
            street_name: rua,
            street_number: Number(numero),
          },
        },
        back_urls: {
          success: "https://www.dedodepeixe.com.br",
          pending: "https://www.dedodepeixe.com.br",
          failure: "https://www.dedodepeixe.com.br",
        },
        auto_return: "approved",
      }),
    });

    const dadosMp = await respostaMp.json();

    if (!respostaMp.ok) {
      throw new Error(dadosMp.message || "Erro no Mercado Pago");
    }

    return res.status(200).json({ url: dadosMp.init_point });
  } catch (erro) {
    console.error("Erro no checkout:", erro);
    return res.status(500).json({ error: erro.message });
  }
}
