const errorHandler = (err, req, res, next) => {
const {constants} = require('../constant')
const {VALIDATION_ERROR, NOT_FOUND, FORBIDDEN, SERVER_ERROR, UNAUTHORIZED} = constants;
const errorTitleMapper = {
    [NOT_FOUND] : 'Not Found',
    [VALIDATION_ERROR]: 'Validation Failed',
    [UNAUTHORIZED]: 'Unauthorized' ,
    [FORBIDDEN]: 'Forbidden',
    [SERVER_ERROR]: 'Server Error'
}
const statusCode = res.statusCode || 500;
res.json({title: errorTitleMapper[statusCode], message: err.message, stackTrace: err.stack})
};

module.exports = errorHandler;