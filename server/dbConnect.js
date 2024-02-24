// Purpose: Connect to the MongoDB server using mongoose.
const mongoose = require('mongoose');

module.exports = async () => {

  const uri = URI = "mongodb+srv://jaseem:8qgqcISk1lQB4Z8Z@cluster0.sl1lqjy.mongodb.net/?retryWrites=true&w=majority";

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