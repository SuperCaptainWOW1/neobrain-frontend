<template>
  <form class="authorization">
    <h2>Authorization</h2>
    <input type="text" v-model="username" placeholder="Username">
    <input type="text" v-model="password" placeholder="Password">
    <BaseButton @click="authenticate" style="margin-bottom: 1rem" content="Sign In" />
    <BaseButtonHollow content="Create Account" />
  </form>
</template>

<script>
import BaseButton from './BaseButton.vue';
import BaseButtonHollow from './BaseButtonHollow.vue';

export default {
  name: 'AuthorizationForm',
  data: () => ({
    username: '',
    password: '',
  }),
  methods: {
    authenticate() {
      this.$store.dispatch('authenticate', {
        username: this.username,
        password: this.password,
      });
      this.$router.push('/').catch((e) => console.log(e));
    },
  },
  components: {
    BaseButton,
    BaseButtonHollow,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.authorization {
  background-color: $c-bg-primary;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  padding: 2.5rem 3.5rem;
  min-width: 32rem;
}

h2 {
  text-align: center;
  font-size: 3.2rem;
  margin-bottom: 3rem;
}

input {
  background-color: $c-bg-input;
  color: $c-text-primary;
  border: none;
  padding: 1.5rem 1.2rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>
