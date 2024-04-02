const logRequests = (req, _res, next) => {
  // eslint-disable-next-line no-console
  console.log(`Request to ${req.originalUrl} for method ${req.method}`);
  next();
};

export default logRequests;
