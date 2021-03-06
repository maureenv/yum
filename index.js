var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

// create a restaurant
Restaurant.create({name: "McDonalads", "address.zipcode": 22222, "address.state": "FL"}, function(err, restaurant){
  if(err)return handleError(err);
  console.log(restaurant.name + " was created");
});

// find by name
function findByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

findByName("In and Out"); // this will show me that findByName is working

// Update Restaurant
function update(restaurant, update){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  })
}
