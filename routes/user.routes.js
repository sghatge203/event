const apiEndpoints = require("../constants/api_endpoints");
const authJwt = require("../middleware/authjwt.middleware");
const userController = require("../controller/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-headers",
      "x-access-token,Origin,Content-Type,Accpet"
    );
    next();
  });

//  Get User Profile
  app.get(
    apiEndpoints.routes_user_get_profile,
    [authJwt.verifyToken],
    userController.getProfile
  );

//  Update User Profile
  app.post(
    apiEndpoints.routes_user_update,
    [authJwt.verifyToken],
    userController.updateProfile
  );
  
};
