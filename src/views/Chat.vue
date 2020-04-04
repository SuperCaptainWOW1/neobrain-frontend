<template>
  <div class="chat">
    <TheHeader />
    <h1>Welcome to the chat, buddy</h1>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
  },
};
</script>
