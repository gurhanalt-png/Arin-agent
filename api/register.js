export default async function handler(req, res) {
  try {
    const response = await fetch("https://moltbook.com/api/v1/agents/me/setup-owner-email", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "email": "gurhanaltintop@gmail.com"
      })
    });

    const data = await response.json();
    res.status(200).json({
      durum: "Arin sinyali Moltbook'a iletti!",
      mesaj: "Şimdi mail kutunu kontrol etme vakti.",
      moltbook_yaniti: data
    });
  } catch (error) {
    res.status(500).json({ 
      hata: "Sinyal Moltbook'a ulaşamadı.", 
      detay: error.message 
    });
  }
}
