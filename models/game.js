const mongoose = require("mongoose");
const categoryModel = require("./category");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: categoryModel,
    },
  ],
});

module.exports = mongoose.model("game", gameSchema);
