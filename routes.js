// organizes routes
const express = require('express');
const router = express.Router();
const {Movie, Cast, Crew} = require('./index');

var bodyParser = require('body-parser');
const e = require('express');
// parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })





// seperating concerns using handlers
async function movieHandler(request, response) {
  try {
    //find all instances of the Model Movies
      const allMovies = await Movie.findAll()
      //respond with allMovies as a json objeect
      response.json(allMovies)
  }catch(error) {
    console.log("something went wrong" + error)
  }
  
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
  const thisMovie = await Movie.findOne({where:{name: request.params.name}})
  response.json(thisMovie)
 }


 async function updateMovieHandler(request, response) {
  let updatedMovie = await Movie.update(request.body, {
    where : {id:request.params.id}
  })
  response.send(updatedMovie ? "Movie Updated" : "Update Failed")
 }

 async function updateCrewHandler(request, response) {
  let updatedCrew = await Crew.update(request.body, {
    where : {id:request.params.id}
  })
  response.send(updatedCrew ? "Crew Updated" : "Update Failed")
 }

 async function updateCastHandler(request, response) {
  let updatedCast = await Cast.update(request.body, {
    where : {id:request.params.id}
  })
  response.send(updatedCast? "Cast Updated" : "Update Failed")
 }

 

// delete
async function deleteMovieHandler(request, response) {
  let deleteMovie = await Movie.destroy({
    where : {id:request.params.id}
  })
  response.send(deleteMovie ? "Movie Deleted" : "Delete Failed")
 }

 async function deleteCastHandler(request, response) {
  let deleteCast = await Cast.destroy( {
    where : {id:request.params.id}
  })
  response.send(deleteCast ? "Cast Deleted" : "Delete Failed")
 }

 async function deleteCrewHandler(request, response) {
  
  let deleteCrew = await Crew.destroy({
    where : {id:request.params.id}
  })
  
  response.send(deleteCrew ? "Crew Deleted" : "Delete Failed")
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
router.put('/movie/:id',jsonParser, updateMovieHandler)
router.put('/crew/:id',jsonParser, updateCrewHandler)
router.put('/movie/:id',jsonParser, updateCastHandler)

// delete
router.delete('/movie/:id',deleteMovieHandler)
router.delete('/crew/:id',deleteCrewHandler)
router.delete('/cast/:id',deleteCastHandler)

//with validator
/*
router.post(
  '/movievalidator',
  body('name').isLength({ min: 5 }),
  jsonParser,
  async(req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let newMovie = await Movie.create(request.body)
    response.send("Movie Created")

  })
*/






module.exports = router;