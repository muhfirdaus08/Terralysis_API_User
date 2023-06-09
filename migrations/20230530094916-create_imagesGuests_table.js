'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('imagesGuests', {
      imageGuestId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mimetype: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      kelas: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      short_desc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      long_desc: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      kandungan: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      persebaran: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      ciri_fisik: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      ciri_kimia: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      ciri_morfologi: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('imagesGuests');
  },
};
