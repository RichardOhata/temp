const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());


app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  

  if (req.method === "OPTIONS") { 
    return res.sendStatus(204);
  }
  next();
});


app.post('/test', async (req, res) => {
  try {
  const response = await fetch(`https://api.myanimelist.net/v2/anime?q=${req.body.inputVal}&limit=4`, {
    headers: {
        'Content-Type': 'application/json',
        'X-MAL-CLIENT-ID': process.env.MAL_CLIENT_ID
    }
});
const data = await response.json();
res.json(data);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});