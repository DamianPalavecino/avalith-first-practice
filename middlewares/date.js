const currentDate = (req, _res, next) => {
  console.log(
    `Request ${req.method}, URL ${req.url}, Date ${new Date().toLocaleString()}`
  );
  next();
};

let date = {
  currentDate,
};

module.exports = date;
