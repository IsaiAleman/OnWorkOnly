<template>
  <div>

<section class="hero is-danger is-fullheight">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="/">
                                <img src="../../../../../public/Logo.png" alt="Logo">
                            </a>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <span class="navbar-item">
                                <a class="button is-white is-outlined" href="/">
                                    <span class="icon">
                                        <i class="fa fa-home"></i>
                                    </span>
                                <span>Home</span>
                                </a>
                                </span>
                                <span class="navbar-item">
                                <a class="button is-white is-outlined" href="/login">
                                    <span class="icon">
                                        <i class="fas fa-sign-in-alt"></i>
                                    </span>
                                <span>Log In</span>
                                </a>
                                </span>
                                <span class="navbar-item">
                                <a class="button is-white is-outlined" href="/register">
                                    <span class="icon">
                                        <i class="fas fa-user-plus"></i>
                                    </span>
                                <span>Sign In</span>
                                </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div id='vantajs' class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title has-text-black">
                            Sign in
                        </h1>
                        <h2 class="subtitle has-text-black">
                            Enter the following information to sign in OWO.
                        </h2>

<div class="box has-text-justified">    
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input id="name" class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input id="email" class="input is-danger" type="email" placeholder="Email input" >
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
</div>


<div class="field">
    <label class="label">Password</label>
  <p class="control has-icons-left">
    <input id="password" class="input" type="password" placeholder="**********">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>


<div class="field is-grouped">
  <div class="control">
    <button class="button is-success">Register</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
                    </div>
                </div>

            </div>

        </section>


  </div>
</template>

<script>
export default {
    name: 'Register',
}
</script>
