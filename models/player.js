'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Player extends Model {
    static associate(models) {
      Player.belongsTo(models.Room, { foreignKey: 'room_id' })
    }
  }
  Player.init({
    username: DataTypes.STRING,
    room_id: DataTypes.INTEGER
  }, { sequelize })
  return Player;
};