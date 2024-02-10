const admin = require('firebase-admin');
const User = require("../models/User");
const { error } = require("../utils/responseWrapper");

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});

module.exports = async (req, res, next) => {
    if (
        !req.headers ||
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer ")
    ) {
        return res.send(error(401, "Authorization Header Required"));
    }

    const idToken = req.headers.authorization.split("Bearer ")[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req._id = decodedToken.uid;

        const user = await User.findById(req._id);
        if (!user) {
            return res.send(error(404, "User Not Found"));
        }
        next();
    } catch (e) {
        console.log(e);
        return res.send(error(401, "Invalid Access Key"));
    }
};