<template>
  <div class="header">
    <h1>Neobrain</h1>

    <span v-if="$route.path === '/'" class="user-info">
      {{ this.$store.getters.getUsername }}
      <img @click="logOut" src="../assets/log-out.svg" />
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      this.$store.dispatch('logOut');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
@import '@/assets/scss/_variables';

.header {
  height: 9rem;
  text-align: center;
  padding: 1rem 0;
  position: relative;
}

.header h1 {
  color: $c-accent;
  font-family: 'Lexend Deca';
  font-weight: 400;
  font-size: 4.8rem;
}

.user-info {
  color: $c-text-primary;
  font-size: 2.4rem;
  position: absolute;
  right: 10rem;
  top: 2.5rem;
  display: flex;
}

.user-info img {
  fill: $c-text-primary;
  margin-left: 3rem;
  cursor: pointer;
}

</style>
