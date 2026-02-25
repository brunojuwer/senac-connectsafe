import type { HttpContext } from '@adonisjs/core/http'
import Request from '#models/request'

export default class RequestsController {
  async store({ request, auth, response }: HttpContext) {

    const caregiverId = request.input('caregiver_id')

    await Request.create({
      userId: auth.user!.id,
      caregiverId,
      status: 'PENDING'
    })

    return response.redirect('/requests')
  }

  async accept({ params, response }: HttpContext) {
    const request = await Request.findOrFail(params.id)

    request.status = 'ACCEPTED'
    await request.save()

    return response.redirect('/requests')
  }

  async reject({ params, response }: HttpContext) {
    const request = await Request.findOrFail(params.id)

    request.status = 'REJECTED'
    await request.save()

    return response.redirect('/requests')
  }

  async index({ view, auth }: HttpContext) {

    let requests
  
    if (auth.user?.type === "FAMILY") {
  
      requests = await Request
        .query()
        .where('family_id', auth.user.id)
        .preload('caregiver', (query) => {
          query.preload('user') 
        })
  
    } else {
  
      requests = await Request
        .query()
        .whereHas('caregiver', (query) => {
          query.where('user_id', auth.user!.id)
        })
        .preload('caregiver', (query) => {
          query.preload('user')
        })
        .preload('user')
    }
  
    return view.render('requests/index', { requests })
  }
}