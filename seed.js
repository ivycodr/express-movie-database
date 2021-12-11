const {Movie, Cast, Crew} = require('./index.js');
const {sequelizedb } = require('./db.js'); 


// this file is used to seed the restaurants in the db

// create the restaurant objects and place it in the array
// make sure it match the model, since you will be inserting it



const movies = [
    { name: 'Transporter 2', releaseDate: '2005-05-01', rating: 'PG-13' },
    { name: 'Rush Hour 2', releaseDate: '2001-05-01', rating: 'PG-13' },
    { name: 'Oceans 12', releaseDate: '2004-05-01', rating: 'PG-13' }


]


const casts = [
    {name: 'Jason Statham', movie_id: 1},
    {name: 'Amber Valletta', movie_id: 1},
    {name: 'Jason Flemyng', movie_id: 1},
    {name: 'Jackie Chan', movie_id: 2},
    {name: 'Chris Tucker', movie_id: 2},
    {name: 'Alan King', movie_id: 2},
    {name: 'George Clooney', movie_id: 3},
    {name: 'Brad Pitt', movie_id: 3},
    {name: 'Matt Damon', movie_id: 3}
]


const crews = [
  {name: 'Luc Besson', role: 'Producer', movie_id: 1},
  {name: 'Steven Chasman', role: 'Producer', movie_id: 1},
  {name: 'Terry Miller', role: 'Executive Producer', movie_id: 2},
  {name: 'Brett Ratner', role: 'Director', movie_id: 2},
  {name: 'Steven Soderbergh', role: 'Director', movie_id: 3}



]


const seed = async () => {
    try {
      console.log('Seeding Start')
      await sequelizedb.sync({force: true})
      await Movie.bulkCreate(movies, {validate: true})
      await Cast.bulkCreate(casts, {validate: true})
      await Crew.bulkCreate(crews, {validate: true})
     
    } catch (error) {
      console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
    }finally {
      sequelizedb.close()
    }
  }
  
 
  seed()
      .then(() => {
        console.log('Seeding Complete - Success')
      })
      .catch(err => {
        console.error('Oh noes! Something went wrong!')
        console.error(err)
      })



