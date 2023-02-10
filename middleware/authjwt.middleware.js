const jwt = require("jsonwebtoken");
const config = require("../config/keys");
const message_constant = require("../constants/message_constant");
const db = require("../models/index.model");
const User = db.user;
const Role = db.role;
const Partner = db.partner;

// Verify token
const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(200).send({
      status: 403,
      message: message_constant.token_not_provided,
    });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(200).send({
        status: 401,
        message: message_constant.unauthorized,
      });
    }
    req.userId = decoded.id;
    next();
  });
};

// Verify admin
const isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      return res.status(200).send({
        status: 500,
        message: err,
      });
    }
    if (!user) {
      return res.status(200).send({
        status: 401,
        message: message_constant.unauthorized,
      });
    }
    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          return res.status(200).send({
            status: 500,
            message: err,
          });
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name == message_constant.admin_role) {
            next();
            return;
          }
        }
        return res.status(200).send({
          status: 403,
          message: message_constant.admin_role_required,
        });
      }
    );
  });
};

// Verify Partner role
const isPartner = (req, res, next) => {
  Partner.findById(req.userId).exec((err, user) => {
    if (err) {
      return res.status(200).send({
        status: 500,
        message: err,
      });
    }
    if (!user) {
      return res.status(200).send({
        status: 401,
        message: message_constant.unauthorized,
      });
    }
    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        return res.status(200).send({
          status: 500,
          message: err,
        });
      }
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === message_constant.partner_role) {
          next();
          return;
        }
      }
      return res.status(200).send({
        status: 403,
        message: message_constant.partner_role_required,
      });
    });
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isPartner,
};
module.exports = authJwt;
