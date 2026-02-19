import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async showLogin({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  public async login({ request, auth, response }: HttpContext) {

    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)

    if (!user || !(await hash.verify(user.password, password))) {
      return response.redirect('/login')
    }

    await auth.use('web').login(user)

    return response.redirect('/dashboard')
  }

}