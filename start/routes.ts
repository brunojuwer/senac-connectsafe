import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/login', [AuthController, 'showLogin'])
router.post('/login', [AuthController, 'login'])

router.get('/dashboard', async ({ view, auth }) => {
  await auth.use('web').authenticate()
  return view.render('dashboard')
})
import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import CaregiversController from '#controllers/caregivers_controller'
import RequestsController from '#controllers/requests_controller'

router.get('/login', [AuthController, 'showLogin'])
router.get('/loginRetry', [AuthController, 'loginRetry'])
router.post('/login', [AuthController, 'login'])

router.get('/register', [AuthController, 'showRegister'])
router.get('/registerRetry', [AuthController, 'registerRetry'])
router.post('/register', [AuthController, 'register'])

router.post('/logout', [AuthController, 'logout'])


router.group(() => {
  router.get('/dashboard', async ({ view }) => {
    return view.render('dashboard')
  }).as('dashboard')

  router.get('/caregivers', [CaregiversController, 'index'])
  router.post('/requests', [RequestsController, 'store'])
  router.get('/requests', [RequestsController, 'index'])
  router.post('/requests/:id/accept', [RequestsController, 'accept']).use(middleware.auth())
  router.post('/requests/:id/reject', [RequestsController, 'reject']).use(middleware.auth())

}).use(middleware.auth({guards: ['web']}))

// router.group(() => {

//   router.get('/caregivers', 'CaregiversController.index')

// }).middleware('auth')
