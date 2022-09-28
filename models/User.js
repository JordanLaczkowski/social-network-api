const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      pattern: "^\\S+@\\S+\\.\\S+$",
      format: "email",
      minLength: 6,
      maxLength: 128,
      // TODO: does this need to be different set amounts?
    },
    thoughts: [{ type: Schema.Types.ObjectId, reference: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, reference: "User" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);
