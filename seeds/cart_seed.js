const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 */
exports.seed = async function (knex) {
  await knex('cart').del();

  const users = await knex('users').select('uid');
  const products = await knex('product').select('pid');

  const cartItems = [];

  for (let i = 0; i < 10; i++) {
    const randomUser = faker.helpers.arrayElement(users);
    const randomProduct = faker.helpers.arrayElement(products);
    const quantity = faker.number.int({ min: 1, max: 5 });

    cartItems.push({
      uid: randomUser.uid,
      pid: randomProduct.pid,
      quantity,
    });
  }

  await knex('cart').insert(cartItems);
};
