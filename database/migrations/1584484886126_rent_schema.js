'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RentSchema extends Schema {
  up () {
    this.create('rents', (table) => {
      table.increments();
      table.timestamps();
      table.integer('idOrder').references('id').inTable('order_rents');
      table.integer('idContrato').references('id').inTable('order_rents');
    })
  }

  down () {
    this.drop('rents')
  }
}

module.exports = RentSchema
