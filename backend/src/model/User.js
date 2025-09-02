/**
 * username
 * name
 * email
 * password
 * age
 * gender
 * 
 * ^
 * 
 * 
 * favourite player
 * player cards: []
 * sports group: []
 * priority group
 * createdAt
 * last online
 * 
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age:{type: Number , required: true},
    gender:{type: String, required:true}

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
