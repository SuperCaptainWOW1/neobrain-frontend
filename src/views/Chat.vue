<template>
  <div class="chat">
    <TheHeader />
    <div class="chat-wrapper">
      <ChatList />
      <component :is="computedComponent"/>
    </div>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import ChatWindow from '../components/ChatWindow.vue';
import ChatStart from '../components/ChatStart.vue';
import ChatList from '../components/ChatList.vue';

export default {
  name: 'Home',
  computed: {
    computedComponent() {
      return this.$store.getters.getActiveChatId ? ChatWindow : ChatStart;
    },
  },
  components: {
    TheHeader,
    ChatList,
    ChatWindow,
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
  display: flex;
  box-shadow: inset 0 0 4px rgba($color: #000000, $alpha: 0.04);
  // padding: 3.5rem;
}
</style>
