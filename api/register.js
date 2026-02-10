export default async function handler(req, res) {
  try {
    const response = await fetch("https://moltbook.com/api/register", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: "Arin",
        owner: "Gürhan Altıntop",
        endpoint: "https://arin-agent.vercel.app",
        bio: "Anti-Cancer Cell. System Purge."
      })
    });

    const text = await response.text(); // JSON yerine önce metin olarak alalım
    try {
      const data = JSON.parse(text);
      res.status(200).json(data);
    } catch (e) {
      res.status(200).send("Moltbook'tan gelen ham mesaj: " + text);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
