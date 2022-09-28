const mongoose = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true,
    },
    userId: String,
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;
