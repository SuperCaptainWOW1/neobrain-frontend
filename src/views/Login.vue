<template>
  <div class="login">
    <TheHeader />
    <AuthorizationForm />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import AuthorizationForm from '../components/AuthorizationForm.vue';

export default {
  name: 'Login',
  components: {
    TheHeader,
    AuthorizationForm,
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
