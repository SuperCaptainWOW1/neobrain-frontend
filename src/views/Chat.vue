<template>
  <div class="chat">
    <TheHeader />
    <div class="chat-wrapper">
      <ChatList />
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import ChatList from '../components/ChatList.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    ChatList,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.chat-wrapper {
  background-color: $c-bg-primary;
  height: calc(100vh - 8.2rem - 2rem);
  margin: 0 2rem;
  margin-bottom: 2rem;
  border-radius: 20px;
  // display: flex;
}
</style>
