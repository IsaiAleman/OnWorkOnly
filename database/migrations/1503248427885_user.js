'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.string('name', 128).notNullable();
      table.string('lastName', 128).notNullable();
      table.string('city', 30).notNullable();
      table.string('country', 30).notNullable();
      table.string('postalCode', 15).notNullable();
      table.string('telephone', 64).notNullable();
      table.string('username', 80).notNullable().unique();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.enu('status',['active', 'inactive']).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
