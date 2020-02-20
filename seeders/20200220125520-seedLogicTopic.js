'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('./seed_data/seedLogicTopic.json', 'utf8'));

    return queryInterface.bulkInsert('LogicTopics', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LogicTopics', null, {});
  }
};
