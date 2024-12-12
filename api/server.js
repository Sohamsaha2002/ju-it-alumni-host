const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY;
const mongourl = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongourl , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.status(201).send({ token });
  } catch (error) {
    res.status(400).send({ message: 'Error registering user', error });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    res.status(500).send({ message: 'Error logging in', error });
  }
});

app.get('/profile', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const user = jwt.verify(token, SECRET_KEY);
    res.send(user);
  } catch (error) {
    res.status(401).send({ message: 'Unauthorized' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));