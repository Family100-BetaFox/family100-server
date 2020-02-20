'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model 

  class RiddleTopic extends Model {
    static associate () {

    }
  }

  RiddleTopic.init({
    Q: DataTypes.STRING,
    A: DataTypes.STRING
  }, {
    sequelize
  })

  return RiddleTopic;
};