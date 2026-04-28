export default async function handler(req, res) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer Gsk_SlOHmDbCYSxCoWq5jEJ2WGdyb3FYxS6ahhMtdINS9PQCYNQVvwLT`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "llama-3.1-70b-versatile",
      messages: [{role: "system", content: "أنت Prognos AI خبير برمجة."}, {role: "user", content: req.body.message}]
    })
  });
  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
