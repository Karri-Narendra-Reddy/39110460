const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async (req, res) => {
    const urls = req.query.url;
  
    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({ error: 'Invalid URL parameter' });
    }
  
    try {
      const results = await Promise.all(
        urls.map(async (url) => {
          try {
            const response = await axios.get(url);
            return response.data.numbers;
          } catch (error) {
            console.error(`Error fetching numbers from ${url}:`, error.message);
            return [];
          }
        })
      );
  
      const distint = Array.from(new Set(results.flat()));
      res.json({ numbers: distint });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
