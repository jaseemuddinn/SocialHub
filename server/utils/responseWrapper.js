const success = (statusCode, result) => ({
    status: "ok",
    statusCode,
    result,
});

const error = (statusCode, message) => ({
    status: "error",
    statusCode,
    message,
});

module.exports = {
    success,
    error,
};
