const error_code = require("../constants/statuscode_constant");

const getResponse = (res,status,message,response) => {
    return res.status(error_code.two_hundred).send({
        status: status,
        message: message,
        response: response,
      });
  };
  module.exports = getResponse;
  