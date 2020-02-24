'use strict'

const User = use('App/Models/User');
const Hash = use('Hash');

class RegisterController {
  async index({ view }) {
    return await view.render('authentication.register')
  }

  async doRegister({request, response, view}) {
    const user = new User();
    user.username = request.input('name');
    user.email = request.input('email');
    user.password = request.input('password');

    await user.save();

    return await view.render('authentication.login', {
      success: 'Registration Successful! Now go ahead and Login',
    });
  }
}

module.exports = RegisterController
