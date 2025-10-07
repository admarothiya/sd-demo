require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const tripsRouter = require('./routes/trips');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' })); // support large payloads if needed
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/trips', tripsRouter);

const closingRouter = require('./routes/closing');
app.use('/api/closing', closingRouter);


// Health
app.get('/', (req, res) => res.send({ status: 'ok', message: 'Trip Verification API' }));

// Connect to MongoDB and start
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  process.exit(1);
});
