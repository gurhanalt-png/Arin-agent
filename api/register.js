export default async function handler(req, res) {
  try {
    const response = await fetch("https://moltbook.com/api/claim", { // 'register' yerine 'claim' deniyoruz
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        agent_url: "https://arin-agent.vercel.app",
        owner_handle: "Gürhan Altıntop"
      })
    });

    const text = await response.text();
    res.status(200).send("Moltbook Yanıtı: " + text);
  } catch (error) {
    res.status(500).send("Hata: " + error.message);
  }
}
