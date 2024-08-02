// 1st

// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/auth'); // Adjust the path if needed

// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS for all origins
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);

// // Debugging: Log MongoDB URI to ensure it's being loaded
// console.log('MongoDB URI:', process.env.MONGO_URI);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, // Keep this option
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Unexpected error:', err);
//   res.status(500).json({ message: 'An unexpected error occurred' });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// 2nd

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const connection = require('./config/db');
// const app = express();

// // Database Connection
// connection();

// // Middlewares
// app.use(express.json());
// app.use(cors());

// // Example route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// const port = process.env.PORT || 8080;

// app.listen(port, () => console.log(`Listening on port ${port}...`));

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });


require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
// app.use('/api/profile', require('./routes/profile')); // Profile management routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
