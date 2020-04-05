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
  methods: {
    click(e) {
      this.$emit('click', e);
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
  padding: 1.5rem 0;
  border-bottom: 1px solid #E4E3E8;
}

.name {
  color: $c-text-primary;
  font-size: 2.2rem;
  font-weight: 700;
}

.message {
  font-size: 1.6rem;
  color: $c-text-secondary;
}
</style>
