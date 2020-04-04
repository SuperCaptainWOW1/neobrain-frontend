<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Lexend+Deca&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Lato', 'Avenir', sans-serif;
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
