const config = require("../config/keys");
const db = require("../models/index.model");
const User = db.user;
const Role = db.role;
const Partner = db.partner;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const rolesCode = require("../config/roles");

// User Signup
exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(200).send({
        status: 404,
        message: err,
      });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(200).send({
              status: 404,
              message: err,
            });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(200).send({
                status: 404,
                message: err,
              });
              return;
            }
            res.status(200).send({
              status: 200,
              message: "User was registered successfully!",
            });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(200).send({
            status: 404,
            message: err,
          });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(200).send({
              status: 404,
              message: err,
            });
            return;
          }
          res.status(200).send({
            status: 200,
            message: "User was registered successfully!",
          });
        });
      });
    }
  });
};

// User Login
exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(200).send({
          status: 404,
          message: err,
        });
        return;
      }
      if (user == null) {
        // partnerSignin(req, res);
      } else {
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(200).send({
            status: 404,
            message: "Invalid Password!.",
            accessToken: null,
          });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400, // 24 hours
        });

        var authorities = [];

        for (let i = 0; i < user.roles.length; i++) {
          authorities.push(user.roles[i].roleId);
        }
        res.status(200).send({
          status: 200,
          message: "User Login Succesfully",
          response: {
            id: user._id,
            email: user.email,
            roles: authorities,
            accessToken: token,
          },
        });
      }
    });
};

// Partner Signup
exports.partnerSignup = (req, res) => {
  const partner = new Partner({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  partner.save((err, partner) => {
    if (err) {
      res.status(200).send({
        status: 404,
        message: err,
      });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(200).send({
              status: 404,
              message: err,
            });
            return;
          }

          partner.roles = roles.map((role) => role._id);
          partner.save((err) => {
            if (err) {
              res.status(200).send({
                status: 404,
                message: err,
              });
              return;
            }
            res.status(200).send({
              status: 200,
              message: "Partner was registered successfully!",
            });
          });
        }
      );
    } else {
      Role.findOne({ name: "partner" }, (err, role) => {
        if (err) {
          res.status(200).send({
            status: 404,
            message: err,
          });
          return;
        }

        partner.roles = [role._id];
        partner.save((err) => {
          if (err) {
            res.status(200).send({
              status: 404,
              message: err,
            });
            return;
          }
          res.status(200).send({
            status: 200,
            message: "Partner was registered successfully!",
          });
        });
      });
    }
  });
};

// Partner Sign in
// const partnerSignin = (req, res) => {
//   Partner.findOne({
//     email: req.body.email,
//   })
//     .populate("roles", "-__v")
//     .exec((err, user) => {
//       if (err) {
//         res.status(200).send({
//           status: 404,
//           message: err,
//         });
//         return;
//       }

//       if (!user) {
//         return res.status(200).send({
//           status: 404,
//           message: "User Not found.",
//         });
//       } else {
//         var passwordIsValid = bcrypt.compareSync(
//           req.body.password,
//           user.password
//         );

//         if (!passwordIsValid) {
//           return res.status(200).send({
//             status: 404,
//             message: "Invalid Password!.",
//             accessToken: null,
//           });
//         }

//         var token = jwt.sign({ id: user.id }, config.secret, {
//           expiresIn: 86400, // 24 hours
//         });

//         var authorities = [];

//         for (let i = 0; i < user.roles.length; i++) {
//           authorities.push(rolesCode.partner_role);
//         }
//         res.status(200).send({
//           status: 200,
//           message: "Partner Usrr Login Succesfully",
//           response: {
//             id: user._id,
//             email: user.email,
//             roles: authorities,
//             accessToken: token,
//           },
//         });
//       }
//     });
// };
