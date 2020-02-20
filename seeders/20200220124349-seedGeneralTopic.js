'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('./seed_data/seedGeneralTopic.json', 'utf8'));

    return queryInterface.bulkInsert('GeneralTopics', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GeneralTopics', null, {});
  }
};
