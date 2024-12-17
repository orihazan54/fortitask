const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// הגדרות CORS
app.use(cors({
  origin: [process.env.CLIENT_URL, 'http://localhost:3000'], // הוספת הדומיין
  credentials: true
}));

app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'FortiTask API is live!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
