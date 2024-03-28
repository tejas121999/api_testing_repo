const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    require: true,
  },
});

module.exports = {
  Post: mongoose.model("posts", PostSchema),
};
