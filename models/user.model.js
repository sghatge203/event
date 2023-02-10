/**
 * @author [Sagar Ghatge]
 * @email [sagarghatge203@gmail.com]
 */

 const mongoose = require('mongoose');

 const User = mongoose.model(
     "User",
     new mongoose.Schema({
         name:String,
         phone:String,
         email:String,
         password:String,
         createAt: { type: Date, default: Date.now },
         roles: [
             {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Role",
             },
           ],
     })
 );
 module.exports = User;
 