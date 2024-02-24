// Import required modules
const express = require('express');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRouter = require('./routers/JobRouter');
const authRouter = require('./routers/authRouter')
const blogRouter = require('./routers/blogRouter')

// Configure environment variables
dotenv.config();

// Create an instance of Express
const app = express();

// Configure the app to use JSON
app.use(express.json());

// Enable CORS
app.use(cors({
    Credentials: true,
    origin: process.env.ORIGIN,
    // origin: "https://social-hub.app/",
}));



// Define routes
app.get('/', (req, res) => {
    res.json('Hello, World!');
});
app.use('/jobs', jobRouter);
app.use('/auth', authRouter);
app.use('/blog', blogRouter);

// Connect to the database
dbConnect();

// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
