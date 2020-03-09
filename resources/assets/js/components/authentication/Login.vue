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
                                <span>Sing Up</span>
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
                            Log In
                        </h1>
                        <h2 class="subtitle has-text-black">
                            Enter the following information to register in OWO.
                        </h2>
                        <div class="box has-text-justified">
                            <form class="form-horizontal">
                                <div>
                                    <label class="label" for="email">E-Mail Address</label>
                                    <div class="control has-icons-left">
                                        <input class="input" id="email" type="email" name="email" placeholder="e.g. bobsmith@gmail.com" required>
										<span class="icon is-small is-left">
                  							<i class="fa fa-envelope"></i>
                						</span>
                                    </div>
                                </div>
                                <div>
                                    <label class="label" for="password">Password</label>
                                    <div class="control has-icons-left">
                                        <input class="input" placeholder="*******" id="password" type="password" name="password" required>
										<span class="icon is-small is-left">
											<i class="fa fa-lock"></i>
										</span>
									</div>
                                </div>
								<div class="field">
									<label for="" class="checkbox">
										<input type="checkbox">
										Remember me
									</label>
								</div>
                                <div>
                                    <div class="field">
                                        <button class="button is-success" type="submit">
                                            Log In
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </div>
</template>

<script>
    export default {
        name: 'Login',
    }
</script>