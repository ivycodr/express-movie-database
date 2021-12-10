const { sequelizedb,DataTypes, Model } = require('../db.js');


class Movie extends Model {

    // add methods here

}
Movie.init({
    name: DataTypes.STRING,
    releaseDate: DataTypes.DATEONLY,
    rating: DataTypes.STRING,
   
}, {
    sequelize : sequelizedb,
    timestamps: false,
});

module.exports = {
    Movie
};