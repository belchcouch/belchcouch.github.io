// api/generate.js

export default async function handler(request, response) {
  // 1. We only accept POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 2. Securely get the API key from environment variables
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return response.status(500).json({ error: 'API key not configured.' });
    }

    // 3. Forward the user's prompt to the real Gemini API
    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request.body), // request.body contains the prompt and schema from the frontend
    });

    if (!geminiResponse.ok) {
      const error = await geminiResponse.json();
      console.error('Gemini API Error:', error);
      return response.status(geminiResponse.status).json({ error: 'Failed to fetch from Gemini API.' });
    }

    // 4. Send the result from the Gemini API back to the user's browser
    const data = await geminiResponse.json();
    return response.status(200).json(data);

  } catch (error) {
    console.error('Serverless function error:', error);
    return response.status(500).json({ error: 'An internal server error occurred.' });
  }
}
