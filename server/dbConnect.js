// Purpose: Connect to the MongoDB server using mongoose.
const mongoose = require('mongoose');

module.exports = async () => {

    const uri = process.env.URI;

    try {
        // Connect the client to the server
        const connect = await mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log('MongoDb Connected to server', connect.connection.host);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }



}