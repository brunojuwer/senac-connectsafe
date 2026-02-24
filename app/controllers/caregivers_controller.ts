import Caregiver from '#models/caregiver'
import type { HttpContext } from '@adonisjs/core/http'

export default class CaregiversController {
  async index({ view }: HttpContext) {
    const caregivers = await Caregiver.query().preload('user')
    return view.render('caregivers/index', { caregivers })
  }
}