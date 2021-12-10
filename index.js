const {Movie} = require('./models/movie')
const {Cast} = require('./models/cast')
const {Crew} = require('./models/crew')


// add cast to movies
Movie.hasMany(Cast, {as: 'cast', foreignKey: 'movie_id'})
Cast.belongsTo(Movie, {foreignKey: 'movie_id'})

// add crew items to movies
Movie.hasMany(Crew, {as: 'crew', foreignKey: 'movie_id'})
Crew.belongsTo(Movie, {foreignKey: 'movie_id'})



module.exports = {Movie, Crew, Cast};