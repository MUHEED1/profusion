// pages/api/chatgpt.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5', // or 'gpt-3.5-turbo' based on your subscription
      messages: [{ role: 'user', content: message }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const completion = response.data.choices[0].message.content;
    res.status(200).json({ message: completion });
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with OpenAI', error: error.message });
  }
}
