export default async function handler(req, res) {
  try {
    const response = await fetch("https://moltbook.com/api/register", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Arin",
        owner: "Gürhan Altıntop",
        endpoint: "https://arin-agent.vercel.app",
        bio: "Anti-Cancer Cell."
      })
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
