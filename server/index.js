// Import required modules
const express = require('express');
const dbConnect = require('./dbConnect');
const cors = require('cors');
const dotenv = require('dotenv');




dotenv.config();


// Create an instance of Express
const app = express();
app.use(cors({
    Credentials: true,
    origin: "http://localhost:3000",
}));




// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Start the server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
