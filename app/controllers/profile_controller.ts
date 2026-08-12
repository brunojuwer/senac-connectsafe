import Caregiver from "#models/caregiver"
import User from "#models/user"
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfileController {
    public async edit({ auth, view }: HttpContext) {
        const user = auth.user!

        let profile = null

        if (user.type === 'CAREGIVER') {
            profile = await Caregiver.query()
            .where('user_id', user.id)
            .firstOrFail()
        }

        if (user.type === 'FAMILY') {
            profile = await User.query()
            .where('id', user.id)
            .firstOrFail()
        }

        return view.render('profile/edit', {
            user,
            profile,
        })
    }

    public async update({ auth, request, response }: HttpContext) {
        const user = auth.user!

        const { full_name, email, phone } = request.only([
            'full_name',
            'email',
            'phone',
        ])

        user.full_name = full_name
        user.email = email
        // user.phone = phone

        await user.save()

        if (user.type === 'CAREGIVER') {
            const caregiver = await Caregiver.query()
            .where('user_id', user.id)
            .firstOrFail()

            const { description } = request.only([
            'description',
            ])

            caregiver.description = description

            await caregiver.save()
        }

        if (user.type === 'FAMILY') {
            const family = await User.query()
            .where('user_id', user.id)
            .firstOrFail()

            // Campos específicos de FAMILY
            // const { ... } = request.only([...])

            await family.save()
        }

        return response.redirect('/profile')
    }
}

