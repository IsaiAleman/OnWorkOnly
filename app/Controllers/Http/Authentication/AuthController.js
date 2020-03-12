'use strict'

class AuthController {
    async login({ auth, request, response, view }) {
        // Try authentication
        const { email, password } = request.all();

        try {
            const token = await auth.attempt(email, password);

            return response.status(200).json({
              status: 'success',
              data: token.id
            });
        } catch (e) {
            return response.status(422).json({
                status: 'error',
                m: 'User/Password Mismatch'
            });
        }

    }

    async logout({ auth, request, response }) {
        // logout user and redirect to main
        await auth.logout();

        return response.status(200).json({
            status: 'success'
        });
    }
}

module.exports = AuthController
