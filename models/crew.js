const { sequelizedb,DataTypes, Model } = require('../db.js');


class Crew extends Model {

    // add methods here

}
Crew.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING

    
}, {
    sequelize : sequelizedb,
    timestamps: false,
});

module.exports = {
    Crew
};