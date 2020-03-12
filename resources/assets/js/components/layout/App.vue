<template>
    <div>
        <nav class="navbar card">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="../../../img/Logo.png" alt="Logo">
                </a>
            </div>

            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <div class="buttons">
                            <a class="button is-info" href="/login">
                                <span class="icon">
                                    <i class="fas fa-sign-in-alt"></i>
                                </span>
                                <span>Log In</span>
                            </a>
                            <a class="button is-light" href="/register">
                                <span class="icon">
                                    <i class="fas fa-user-plus"></i>
                                </span>
                                <span>Sign Up</span>
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </nav>

        <div class="container is-fluid is-main-content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
