<template>
  <div>
    <h2>Register</h2>

    <form role="form" method="POST" action="/api/register">
      <div>
        <label for="name">Name</label>
        <div>
          <input id="name" type="text" name="name" required>
        </div>
      </div>
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
      <div>
        <div>
          <button type="submit">
            Register
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Register',
}
</script>
