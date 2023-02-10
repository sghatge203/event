const apiEndpoints = require("../constants/api_endpoints");
const authController = require("../controller/auth.controller");
const validate = require("../middleware/validate.middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-headers",
      "x-access-token,Origin,Content-Type,Accpet"
    );
    next();
  });

  // User Sign up
  app.post(
    apiEndpoints.routes_auth_signup,
    [
      validate.checkDuplicateEmail,
    //   validate.checkDuplicatePartnerEmail,
      validate.checkRoleExits,
    ],
    authController.signup
  );

  // User Sign in
  app.post(apiEndpoints.routes_auth_signin, authController.signin);

  // Partner Sign up
  app.post(
    apiEndpoints.routes_auth_partner_signup,
    [
      validate.checkDuplicateEmail,
    //   validate.checkDuplicatePartnerEmail,
      validate.checkRoleExits,
    ],
    authController.partnerSignup
  );  
};
