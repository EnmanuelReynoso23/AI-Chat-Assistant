import { API_KEY, API_URL } from '../config/constants';

interface ApiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}

export async function sendMessageToAI(message: string, context: string = ''): Promise<string> {
  try {
    const prompt = context 
      ? `Context: ${context}\n\nUser: ${message}`
      : message;

    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data: ApiResponse = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw error;
  }
}