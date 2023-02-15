module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-headers",
      "x-access-token,Origin,Content-Type,Accpet"
    );
    next();
  });
};
