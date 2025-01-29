const handleInvalidUrlError = (err, res) => {
  res.status(404).json({
    status: 'Fail',
    message: 'Requested URL does not exist',
  });
};

const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 404;

  if (statusCode === 404) handleInvalidUrlError(err, res);
};

module.exports = globalErrorHandler;
