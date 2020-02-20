'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class LogicTopic extends Model {
    static associate () {

    }
  }

  LogicTopic.init({
    Q: DataTypes.STRING,
    A: DataTypes.STRING
  }, {
    sequelize
  })

  return LogicTopic;
};