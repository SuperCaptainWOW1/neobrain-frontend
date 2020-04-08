<template>
  <div class="chat-item" @click="click">
    <span class="name">{{ friendName }}</span>
    <p class="message">
      {{ lastMessageShortened }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ChatItem',
  props: {
    friendName: String,
    lastMessage: String,
  },
  data: () => ({
    activeChat: null,
  }),
  methods: {
    click() {
      this.$emit('click');
    },
  },
  computed: {
    lastMessageShortened() {
      if (this.lastMessage.length > 85) {
        return `${this.lastMessage.slice(0, 85)}...`;
      }
      return this.lastMessage;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.chat-item {
  padding: 1.6rem 0;
  border-bottom: 1px solid #E4E3E8;

  margin: 0 2rem;
  .name {
    color: $c-text-primary;
    font-size: 2.2rem;
    font-weight: 700;
  }
  .message {
    font-size: 1.6rem;
    color: $c-text-secondary;
  }
}

.chat-item.active {
  background-color: #fff;
  position: relative;
  top: -0.1rem;

  padding: 1.6rem 1.6rem;
  margin: 0 0.4rem;

  border-radius: 5px;
  box-shadow: 0 1px 4px rgba($color: #000000, $alpha: 0.12);
}


</style>
