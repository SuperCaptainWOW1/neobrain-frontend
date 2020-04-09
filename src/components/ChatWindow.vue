<template>
  <div class="chat-window">
    <h2>{{ chatData.name }}</h2>
    <div class="messages">
      <ChatWindowMessage
        v-for="msg in chatData.messages"
        :key="msg.id"
        :message="msg"
        :isYours="msg.author === $store.getters.getUsername ? true : false"
      />
    </div>
    <div class="message-input">
      <input type="text" placeholder="Type a message here">
      <button> <img src="@/assets/send.svg" alt="Send a message"> </button>
    </div>
  </div>
</template>

<script>
import ChatWindowMessage from '@/components/ChatWindowMessage.vue';

export default {
  name: 'ChatWindow',
  data: () => ({

  }),
  computed: {
    chatData() {
      return this.$store.getters.getActiveChatData;
    },
  },
  components: {
    ChatWindowMessage,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.chat-window {
  padding: 3.5rem;
  flex-grow: 1;
  position: relative;
  h2 {
    text-align: center;
    font-size: 2.8rem;
  }
  .message-input {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: calc(100% - 7rem);
    margin-bottom: 1.5rem;
    input {
      background-color: #fff;
      color: $c-text-primary;
      padding: 1.8rem;
      box-shadow: 0 1px 4px rgba($color: #000000, $alpha: 0.12);

      font-size: 1.8rem;
      flex-grow: 1;
    }
    button {
      padding: 0.7em;
      background-color: $c-bg-primary-alt;
      border: none;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 1rem;
      // top: 1rem;
      cursor: pointer;
      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
  .messages {
    display: flex;
    flex-direction: column;
  }
}
</style>
