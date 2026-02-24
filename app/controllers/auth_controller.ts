import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import type { HttpContext } from '@adonisjs/core/http'
import Caregiver from '#models/caregiver'

export default class AuthController {  

  public showLogin({ view }: HttpContext) {
    return view.render('auth/login')
  }
  public loginRetry({ view }: HttpContext) {
    return view.render('auth/falha-login')
  }

  public showRegister({ view }: HttpContext) {
    return view.render('auth/register')
  }

  public registerRetry({ view }: HttpContext) {
    return view.render('auth/falha-register')
  }

  public async register({ request, response, auth }: HttpContext) {

    try {
      const data = request.only(['email', 'password', 'type', 'full_name'])

      const user = await User.create({
        email: data.email,
        full_name: data.full_name,
        password: data.password,
        type: data.type
      })

      if (data.type === 'CAREGIVER') {
        await Caregiver.create({
          id: user.id,
          userId: user.id,
          description: 'Novo cuidador',
          location: 'Não informado',
          rating: 0
        })
      }

      await auth.use('web').login(user)

      if(user.type === 'FAMILY') {
        return response.redirect('caregivers');
      }

      return response.redirect('/requests');
    } catch (error) {
      return response.redirect('/registerRetry');
    }
    
  }

  public async login({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)

    if (!user || !(await hash.verify(user.password, password))) {
      return response.redirect('/loginRetry')
    }

    await auth.use('web').login(user)

    if(user.type === 'FAMILY') {
      return response.redirect('caregivers');
    }

    return response.redirect('/requests')
  }

  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/login')
  }

}