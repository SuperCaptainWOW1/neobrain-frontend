<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Lexend+Deca&display=swap');
@import '@/assets/scss/_variables';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', 'Avenir', sans-serif;
}

input {
  background-color: $c-bg-input;
  color: $c-text-primary;
  border: none;
  padding: 1.5rem 1.2rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
}

input::placeholder {
  color: $c-text-primary;
}

input:focus::placeholder {
  opacity: .7;
}

@media (max-width: 576px) {
  html {
    font-size: 5px
  }
}

@media (min-width: 576px) {
  html {
    font-size: 6px
  }
}

@media (min-width: 768px) {
  html {
    font-size: 7px
  }
}

@media (min-width: 992px) {
  html {
    font-size: 8px
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 10px
  }
}
</style>
