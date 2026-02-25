import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Caregiver from './caregiver.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Request extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare status: 'PENDING' | 'ACCEPTED' | 'REJECTED'

  @column({columnName: 'caregiver_id'})
  declare caregiverId: number

  @column({columnName: 'family_id'})
  declare userId: number

  @belongsTo(() => Caregiver)
  declare caregiver: BelongsTo<typeof Caregiver>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}