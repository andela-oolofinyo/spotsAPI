var mongoose = require('mongoose');
mongoose.connect('mongodb://leisurespots:l31sur6@ds031691.mongolab.com:31691/leisurespots');
var db = mongoose.connection;
db.on('error', function (err){
  console.log('No connection found', err);
});

db.once('open', function (){
  console.log('Connection opened');
});

var Schema = mongoose.Schema,
    lspotsSchema = new Schema({
      "Image": { type : String, default: "http://s16.postimg.org/5oh90r7dx/no_image.jpg"},
      "Name": String,
      "Address": String,
      "Rating": Number,
      "Costs": Number,
      "Description": String,
      "Tags": String,
      "Phone_Number": { type : Number, default: "081234567"},
      "Email": String,
      "Website": String,
      "working_hours": String,
      "Menu": String
    });

var lspotModel = mongoose.model('lspotModel', lspotsSchema, 'leisureSpots');

module.exports = lspotModel;
