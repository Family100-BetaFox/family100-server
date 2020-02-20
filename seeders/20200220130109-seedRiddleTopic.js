'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('./seed_data/seedRiddleTopic.json', 'utf8'));

    return queryInterface.bulkInsert('RiddleTopics', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RiddleTopics', null, {});
  }
};
