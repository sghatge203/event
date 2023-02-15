const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongo = require("mongodb").MongoClient;
require("dotenv").config();
const db = require("./models/index.model");
const rolesCode = require("./config/roles");
const Role = db.role;
var app = express();
var message_constant = require("./constants/message_constant");
// MongoDb Connection
db.mongoose
  .connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log(message_constant.database_connection);
    initial();
  })
  .catch(() => {
    console.log(message_constant.database_connection_error);
    process.exit();
  });

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Use Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// import routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/partner.routes")(app);
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: message_constant.user_role,
        roleId: rolesCode.user_role,
      }).save((err) => {
        if (err) {
          console.log(err);
        }
        console.log(message_constant.user_role_added);
      });
      new Role({
        name: message_constant.partner_role,
        roleId: rolesCode.partner_role,
      }).save((err) => {
        if (err) {
          console.log(err);
        }
        console.log(message_constant.partner_role_added);
      });
      new Role({
        name: message_constant.admin_role,
        roleId: rolesCode.admin_role,
      }).save((err) => {
        if (err) {
          console.log(err);
        }
        console.log(message_constant.admin_role_added);
      });
    }
  });
}

app.listen(4001, function () {
  console.log(`${message_constant.server_connected} 4001`);
});
