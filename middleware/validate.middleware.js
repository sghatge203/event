const message_constant = require("../constants/message_constant");
const db = require("../models/index.model");
const ROLES = db.ROLES;
const User = db.user;
const Partner = db.partner;

// Check Duplicate User email
const checkDuplicateEmail = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: message_constant.duplicate_email });
      return true;
    }
    next();
  });
};

// Check duplicate partner email
// const checkDuplicatePartnerEmail = (req, res, next) => {
//   Partner.findOne({
//     email: req.body.email,
//   }).exec((err, user) => {
//     if (err) {
//       res.status(500).send({ message: err });
//       return;
//     }
//     if (user) {
//       res.status(400).send({ message: message_constant.duplicate_email });
//       return true;
//     }
//     next();
//   });
// };

const checkRoleExits = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `${req.body.roles[i]} ${message_constant.role_not_exits}`,
        });
        return;
      }
    }
  }
  next();
};

const validate = {
  checkDuplicateEmail,
  checkRoleExits,
  // checkDuplicatePartnerEmail,
};

module.exports = validate;
