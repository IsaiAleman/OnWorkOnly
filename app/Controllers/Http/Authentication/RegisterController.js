'use strict'

const User = use('App/Models/User');

class RegisterController {
    async doRegister({request, response, view}) {
        const user = new User();

        user.username = request.input('name');
        user.email = request.input('email');
        user.password = request.input('password');

        await user.save();

        return response.status(200).json({
            m: 'Registration Successful! Now go ahead and Login'
        });
    }
}

module.exports = RegisterController
