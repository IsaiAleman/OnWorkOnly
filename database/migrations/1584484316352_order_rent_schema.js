'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderRentSchema extends Schema {
  up () {
    this.create('order_rents', (table) => {
      table.increments();
      table.timestamps();
      table.interger('idUser').references('id').inTable('user');
      table.interger('idProperty').references('id').inTable('properties');
      table.datetime('dateStart').notNulleable();
      table.datetime('dateEnd').notNulleable();
      table.enu('status',['accepted','declined','pending']).notNulleable();
      table.datetime('modifiedDate').notNulleable();
    })
  }

  down () {
    this.drop('order_rents')
  }
}

module.exports = OrderRentSchema
