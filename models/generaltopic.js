'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class GeneralTopic extends Model {
    static associate () {

    }
  }

  GeneralTopic.init({
    Q: DataTypes.STRING,
    A: DataTypes.STRING
  }, {
    sequelize
  })

  return GeneralTopic;
};