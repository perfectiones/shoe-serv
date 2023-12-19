const { faker } = require('@faker-js/faker');
('use strict');

const boilerManufacturers = [
  'Чамзинский завод трусов',
  'Саранский ликеро-водочный',
  'Рузаевский сталелитейный',
  'Кочкуровские голоши',
  'Презервативная фабрика Пензы',
  'Фабрика тапочек Воркута',
  'Надымский завод лопат и ведер',
];
const partsManufacturers = [
  'Сызраньский филиал полотенец',
  'Роддом Измайлово',
  'Завод Левый',
  'Завод Правый',
  'Завод Средний',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'BoilerParts',
      [...Array(100)].map(() => ({
        boiler_manufacturer:
          boilerManufacturers[
            Math.floor(Math.random() * boilerManufacturers.length)
          ],
        parts_manufacturer:
          partsManufacturers[
            Math.floor(Math.random() * partsManufacturers.length)
          ],
        price: faker.random.numeric(4),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        vendor_code: faker.internet.password(),
        in_stock: faker.random.numeric(1),
        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.random.numeric(3),
        compatibility: faker.lorem.sentence(7),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('BoilerParts', null, {});
  },
};
