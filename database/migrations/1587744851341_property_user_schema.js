'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertyUserSchema extends Schema {
  up () {
    this.create('property_users', (table) => {
      table.increments()
      table.interger('idUser').references('id').inTable('users');
      table.interger('idProperty').references('id').inTable('properties');
      table.timestamps()
    })
  }

  down () {
    this.drop('property_users')
  }
}

module.exports = PropertyUserSchema
