const ERROR = {
    "BAD_REQUEST": 400,
    "UNAUTHORIZED": 401,
    "FORBIDDEN": 403,
    "NOT_FOUND": 404,
    "CONFLICT": 409,
    "INTERNAL_SERVER_ERROR": 500
};

const SUCCESS = {
    "OK": 200,
    "CREATED": 201,
    "ACCEPTED": 202
};

module.exports = {
    ERROR,
    SUCCESS
};