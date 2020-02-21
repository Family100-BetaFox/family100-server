'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class Room extends Model {
    static associate (models) {
      Room.hasMany(models.Player, { foreignKey: 'id'} )
    }
  }

  Room.init({
    name: DataTypes.STRING
  }, {
    sequelize
  })

  return Room;
};