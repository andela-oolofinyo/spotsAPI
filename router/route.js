var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    lspot = require('../model/lspotModels'),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended: false});

router.use(parseUrlencoded);
router.use(bodyParser.json());  

router.route('/')

.get(function (request, response){
  lspot.find(function(err, lspot) {
  if (err) {
    return console.error(err);
  }
  response.json(lspot);
  console.log(lspot);
  });
})

.post(function (request, response){
  var newSpot = request.body;
  lspot.create(newSpot, function(err, spot){
    lspot.find({}, function(err, lspot){
      response.json(lspot);
    });
  });
});

router.route('/:id')

.put(function (request, response){
  var id = request.params.id,
      newSpot = request.body;

  var query = {"_id": id},
      update = newSpot,
      options = {new: true};
  
  lspot.findByIdAndUpdate(query, update, options, function (err, spot) {
    if (err) {
    console.log('got an error');
    response.send('The spot' + id + ' doesnt exist. Try something else.');
    }else{
      lspot.find({}, function(err, lspot){
      response.json(lspot);
      });
    }
  });
})

// .delete(function (request,response){
//   var id  = request.params.id;
  
//   lspot.findByIdAndRemove(id, function (err, spot){
//     if(err){
//       console.log('error');
//     }else{
//       lspot.find({}, function(err, lspot){
//       response.json(lspot);
//       });
//     }
//   });
// });

module.exports = router;