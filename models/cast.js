const { sequelizedb,DataTypes, Model } = require('../db.js');


class Cast extends Model {

    // add methods here

}
Cast.init({
    name: DataTypes.STRING

    
}, {
    sequelize : sequelizedb,
    timestamps: false,
});

module.exports = {
    Cast
};