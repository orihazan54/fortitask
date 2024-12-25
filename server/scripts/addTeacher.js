const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // עדכן את הנתיב לפי הפרויקט שלך

async function addTeacher() {
  const email = 'teacher@example.com';
  const existingTeacher = await User.findOne({ email });
  if (existingTeacher) {
    console.log('Teacher already exists!');
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('secure_password', salt);

  const teacher = new User({
    username: 'Teacher Name',
    email: email,
    password: hashedPassword,
    role: 'Teacher',
  });

  await teacher.save();
  console.log('Teacher added successfully!');
}

mongoose
  .connect('mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    addTeacher().then(() => mongoose.disconnect());
  })
  .catch((err) => console.error('MongoDB connection error:', err));
