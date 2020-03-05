<template>
    <div>
        <h2>Login</h2>

        <form class="form-horizontal">
          <div>
            <label for="email">E-Mail Address</label>
            <div>
              <input id="email" type="email" name="email" required>
            </div>
          </div>
          <div>
            <label for="password">Password</label>
            <div>
              <input id="password" type="password" name="password" required>
            </div>
          </div>
          <div >
            <div>
              <button type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>
