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
    let requests = null;
    if(auth.user?.type === "FAMILY") {

      requests = await Request
      .query()
      .preload('caregiver')
      .where('family_id', auth.user!.id)
    } else {
      requests = await Request
        .query()
        .preload('caregiver')
        .where('caregiver_id', auth.user!.id)
    }


    return view.render('requests/index', { requests })
  }
}