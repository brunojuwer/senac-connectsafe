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


        if (user.type === 'CAREGIVER') {
            const { email, phone, description  } = request.only([
                'email',
                'phone',
                'description'
            ])

            user.email = email
            user.phone = phone


            await user.save()

            const caregiver = await Caregiver.query()
            .where('user_id', user.id)
            .firstOrFail()

            caregiver.description = description


            await caregiver.save()
        }

        if (user.type === 'FAMILY') {

            const { email, phone, family_members  } = request.only([
                'email',
                'phone',
                'family_members'
            ])


            user.email = email
            user.phone = phone
            user.family_members = family_members
            console.log(family_members);

            await user.save()
        }

        return response.redirect('/profile/edit')
    }
}
