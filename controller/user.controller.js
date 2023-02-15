const db = require("../models/index.model");
const User = db.user;

const getProfile = (req, res) => {
  let id = req.userId;
  User.findById({ _id: id }, function (err, data) {
    if (err) {
      return res.status(200).send({
        status: 404,
        message: "Not Found",
        response: null,
      });
    } else {
      let response = {
        email: data["email"],
        phone: data["phone"],
        name: data["name"],
      };
      return res.status(200).send({
        status: 200,
        message: "Success",
        response: response,
      });
    }
  });
};

const updateProfile = async (req, res) => {
    const filter = { _id: req.userId };
    const update = req.body;
    User.findOneAndUpdate(filter, update, function (err, result) {
      if (err) {
        return res.status(200).send({
          status: 404,
          message: "Not found",
          response: null,
        });
      } else {
        return res.status(200).send({
          status: 200,
          message: "Updated",
          response: null,
        });
      }
    });
  };

module.exports = {
  getProfile,
  updateProfile
};
