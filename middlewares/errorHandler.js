const notFound = (_req, res, next) => {
  res.status(404).send("Error 404: Not Found");
  next();
};

let errors = {
  notFound,
};

module.exports = errors;
