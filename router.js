// organizes routes
const express = require('express');
const router = express.Router();


//GET method on / route returns all restaurants
app.get('/restaurants', async (request,response) => {
  //find all instances of the Model Restaurant
  const allRestaurants = await Restaurant.findAll()
  //respond with allRestaurants as a json objeect
  console.log("working");
  response.json(allRestaurants)
})

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;