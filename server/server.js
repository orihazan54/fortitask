const cors = require('cors'); // מייבא את CORS
const express = require('express'); // מייבא את Express
const app = express(); // יוצר מופע של Express

// Middleware כדי לאפשר CORS רק לדומיינים מסוימים
app.use(cors({
  origin: ['https://fortitask.org', 'https://www.fortitask.org']
}));

// Middleware כדי לאפשר קריאה של JSON בבקשות
app.use(express.json());

// מסלול ברירת מחדל לבדיקה
app.get('/', (req, res) => {
  res.send('API is running...');
});

// הפעלת השרת על פורט 5000 או פורט מוגדר מראש
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
