// responseWrapper.js

const success = (statusCode, message, data) => {
    return {
        statusCode,
        message,
        data
    };
};

const error = (statusCode, message) => {
    return {
        statusCode,
        message
    };
};

module.exports = {
    success,
    error
};
