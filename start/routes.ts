import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/login', [AuthController, 'showLogin'])
router.post('/login', [AuthController, 'login'])

router.get('/dashboard', async ({ view, auth }) => {
  await auth.use('web').authenticate()
  return view.render('dashboard')
})


// router.group(() => {

//   router.get('/caregivers', 'CaregiversController.index')

// }).middleware('auth')