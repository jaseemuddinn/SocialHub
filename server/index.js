// Import required modules
const express = require('express');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRouter = require('./routers/JobRouter');
const authRouter = require('./routers/authRouter')

dotenv.config();

// Create an instance of Express
const app = express();
app.use(express.json());
app.use(cors({
    Credentials: true,
    // origin: "http://localhost:5173",
    origin: "https://social-hub.app/",
}));



// Define routes
app.get('/', (req, res) => {
    res.json('Hello, World!');
});
app.use('/jobs', jobRouter);
app.use('/auth', authRouter);



// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
