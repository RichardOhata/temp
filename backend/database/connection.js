const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://Paul:8CsRc688pwZvShJS@database1.dzuce4l.mongodb.net/Users?retryWrites=true&w=majority`;
module.exports = mongoose.connect(mongoDB);