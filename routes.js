// organizes routes
const express = require('express');
router = express.Router();
var bodyParser = require('body-parser')
// parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//const app = require('./app')
const {Movie, Cast, Crew} = require('./index');
const { router } = require('./app');


// seperating concerns using handlers
async function movieHandler(request, response) {
  //find all instances of the Model Movies
  const allMovies = await Movie.findAll()
  //respond with allMovies as a json objeect
  response.json(allMovies)
}

async function addMovieHandler(request, response) {
  
    let newMovie = await Movie.create(request.body)
    response.send("Movie Created")


}

async function addCrewHandler(request, response) {
  
  let newCrew = await Crew.create(request.body)
  response.send("Crew Created")


}

async function addCastHandler(request, response) {
  
  let newCast = await Cast.create(request.body)
  response.send("Cast Created")


}

async function castHandler(request, response) {
  //find all instances of the Model Cast
  const allCasts = await Cast.findAll()
  //respond with allCasts as a json objeect
  response.json(allCasts)
}

async function crewHandler(request, response) {
  //find all instances of the Model Crew
  const allCrews= await Crew.findAll()
  //respond with allCrews as a json objeect
  response.json(allCrews)
}






// single movie by primary key



async function movieByID(request, response) {
 //find all instances of the Model Movies
 const movie = await Movie.findByPk(request.params.id)
 //respond with allMovies as a json objeect
 response.json(movie)
}

// single crew by primary key

async function crewByID(request, response) {
  const crew = await Crew.findByPk(request.params.id)
  response.json(crew)
 }
// single cast by primary key

async function castByID(request, response) {
  const cast = await Cast.findByPk(request.params.id)
  response.json(cast)
 }

 async function movieByName(request, response) {
  //find one specific instance of the Musician model by name
  const thisMovie = await Movie.findOne({where:{name: req.params.name}})
  res.json(thisMovie)
 }


 async function updateMovieHandler(request, response) {
  let updateMovie = await Movie.update(req.body, {
    where : {id:req.params.id}
  })
  res.send(updatedMovie ? "Movie Updated" : "Update Failed")
 }

 async function updateCrewHandler(request, response) {
  let updateCrew = await Crew.update(req.body, {
    where : {id:req.params.id}
  })
  res.send(updatedCrew ? "Crew Updated" : "Update Failed")
 }

 async function updateCastHandler(request, response) {
  let updateCast = await Cast.update(req.body, {
    where : {id:req.params.id}
  })
  res.send(updatedCast? "Cast Updated" : "Update Failed")
 }

 

// delete
async function deleteMovieHandler(request, response) {
  let deleteMovie = await Movie.destroy(req.body, {
    where : {id:req.params.id}
  })
  res.send(deleteMovie ? "Movie Deleted" : "Delete Failed")
 }

 async function deleteCastHandler(request, response) {
  let deleteCast = await Cast.destroy(req.body, {
    where : {id:req.params.id}
  })
  res.send(deleteCast ? "Cast Deleted" : "Delete Failed")
 }

 async function deleteCrewHandler(request, response) {
  let deleteCrew = await Crew.destroy(req.body, {
    where : {id:req.params.id}
  })
  res.send(deleteCrew ? "Crew Deleted" : "Delete Failed")
 }





// routes calling handlers
// get routes 
router.get('/movies',movieHandler);
router.get('/casts',castHandler);
router.get('/crews',crewHandler);
router.get('/movie/:id',movieByID);
router.get('/crew/:id', crewByID);
router.get('/cast/:id', castByID);
router.get('/movie-name/:name', movieByName);

// post
router.post('/movie', jsonParser, addMovieHandler);
router.post('/cast',jsonParser, addCastHandler)
router.post('/cast',jsonParser, addCrewHandler)

// update
router.put('/movie',jsonParser, updateMovieHandler)
router.put('/crew',jsonParser, updateCrewHandler)
router.put('/movie',jsonParser, updateCastHandler)

// delete
router.delete('/movie/:id',jsonParser, deleteMovieHandler)
router.delete('/crew/:id',jsonParser, deleteCrewHandler)
router.delete('/cast/:id',jsonParser, deleteCastHandler)







module.exports = router;