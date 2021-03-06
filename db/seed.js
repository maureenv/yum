var mongoose = require('mongoose');
var Schema = require("../db/schema.js");


var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

Restaurant.remove({}, function(err){
  console.log(err)
});

MenuItem.remove({}, function(err){
  console.log(err)
})

var inAndOut= new Restaurant(
  {
    name: "In and Out",
    address: {street: "M street", zipcode: 22310, state: "CA"},
    yelp: "inandout.com"
  });

var fiveGuys= new Restaurant(
    {
      name: "five Guys",
      address: {street: "M street", zipcode: 22310, state: "CA"},
      yelp: "fiveGuys.com"
  });


var hamburger = new MenuItem({title: "hamburger"});
var fries = new MenuItem({title: "fries"});

var restaurants = [inAndOut, fiveGuys];
var menuitems = [hamburger, fries];

console.log(restaurants);


for(var i = 0; i< restaurants.length; i++){
  restaurants[i].items.push(menuitems[i])
  restaurants[i].save(function(err){
    if(err){
      console.log(err)
    } else {
      console.log("restaurant was saved");
    }
  })
}

// process.exit();
