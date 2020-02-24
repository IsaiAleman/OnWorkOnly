'use strict'

class AuthController {
  async index({ auth, view, response }) {
    // If user is authenticated
    // Redirect to app
    if (auth.user) {
      return response.redirect('/');
    }

    // render login
    return await view.render('authentication.login');
  }

  async login({ auth, request, response, view }) {
    // Try authentication
    const { email, password } = request.all();

    try {
      await auth.attempt(email, password);
    } catch (e) {
      // If user - password is bad, await will throw an exception
      // render login with error message.
      return view.render('authentication.login', {
        error: 'User/Password Mismatch'
      });
    }

    return response.redirect('/');
  }

  async logout({auth, request, response }) {
    // logout user and redirect to main
    await auth.logout();

    return response.redirect('/');
  }
}

module.exports = AuthController
