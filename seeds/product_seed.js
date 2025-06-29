const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 */
exports.seed = async function(knex) {
  await knex('product').del();

  const products = [];

  for (let i = 0; i < 20; i++) {
    products.push({
      p_name: faker.commerce.productName(),
      p_cash: faker.number.int({ min: 10000, max: 500000 }),
      p_label: faker.commerce.department(),
      p_information: faker.commerce.productDescription(),
      p_download_link: faker.internet.url(),
      p_images: faker.image.urlPicsumPhotos(),
      p_video_url: faker.internet.url(),
      p_quantity: faker.number.int({ min: 1, max: 100 }),
      is_deleted: false,
    });
  }

  await knex('product').insert(products);
};
