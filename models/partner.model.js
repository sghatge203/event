const mongoose = require("mongoose");

const Partner = mongoose.model(
  "Partner",
  new mongoose.Schema({
    companyPan:String,
    companyName: String,
    phoneNo: String,
    email: String,
    password: String,
    createAt: { type: Date, default: Date.now },
    userStatus: String,
    address: String,
    bankDetails: {
      bankName: String,
      bankAccount: String,
      ifsc: String,
      accountName: String,
    },
    upiId:String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = Partner;
