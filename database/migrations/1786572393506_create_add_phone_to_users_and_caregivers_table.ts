import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.alterTable('users', (table) => {
      table.string('phone').nullable()
    })

    this.schema.alterTable('users', (table) => {
      table.bigint('family_members').nullable()
    })

  }

  async down() {
    this.schema.alterTable('users', (table) => {
      table.dropColumn('phone')
    })
    this.schema.alterTable('users', (table) => {
      table.dropColumn('family_members')
    })
  }
}