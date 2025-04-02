const mongoose = require("mongoose");
const NewSchema = new mongoose.Schema({
    title: {
        type: String
    }
});
module.exports = mongoose.model("Itemtodo", NewSchema);