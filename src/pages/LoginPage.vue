<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-errors">
        <div
          v-for="error in errors"
          :key="error.description"
          class="alert alert-danger"
        >{{error.description}}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          autocomplete="no"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          autocomplete="no"
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter password"
        />
      </div>
      <BaseButton :isLoading="isLoading" @on-click="onClickOnLogin()" text="Login"></BaseButton>
    </div>
  </div>
</template>
<script>
import BaseButton from "../components/BaseButton";
export default {
  data() {
    return {
      isLoading: false,
      errors: [],
      email: "",
      password: ""
    };
  },
  methods: {
    onClickOnLogin() {
      this.errors = [];
      this.isLoading = true;
      fetch(`http://localhost:3100/login`, {
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(response => {
          if (response.isOk === false) {
            this.errors = response.errors;
          } else {
            this.$router.push(`/patients`);
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  components: { BaseButton }
};
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-content {
    border-radius: 10px;
    width: 400px;
    background: #eee;
    padding: 50px;
  }
}
</style>