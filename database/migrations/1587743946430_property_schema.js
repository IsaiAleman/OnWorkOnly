'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertySchema extends Schema {
  up () {
    this.create('properties', (table) => {
      table.increments();
      table.timestamps();
      table.string('location', 254).notNullable().unique();
      table.string('size', 254).notNullable().unique();
      table.string('status', 254).notNullable().unique();
      table.float('price', 2).notNullable().unique();
      table.enu('column', ['Activo', 'Inactivo'])
    })
  }

  down () {
    this.drop('properties')
  }
}

module.exports = PropertySchema
