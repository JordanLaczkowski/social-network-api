const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema();

//
//
//
//

const User = model("user", userSchema).get(function () {
  return this.friends.length;
});

module.exports = User;
