const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB Replica Set
mongoose.connect('mongodb://mongo1:27017,mongo2:27017,mongo3:27017/mydb?replicaSet=rs0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => console.log('Connected to MongoDB Replica Set'));
db.on('error', (err) => console.error('MongoDB connection error:', err));

// Define a sample schema and model
const ItemSchema = new mongoose.Schema({ name: String });
const Item = mongoose.model('Item', ItemSchema);

// Add a sample route
app.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// Add an item
app.post('/add', express.json(), async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.send('Item added!');
});

// Start the server
app.listen(3000, () => console.log('App running on http://localhost:3000'));
