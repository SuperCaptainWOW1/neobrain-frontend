<template>
  <div class="message" :class="{ yours : isYours }">
    <p class="content">
      {{ message.content }}
    </p>
    <span>{{ message.time }}</span>
  </div>
</template>

<script>
export default {
  name: 'ChatWindowMessage',
  props: {
    message: {
      type: Object,
      reqired: true,
    },
    isYours: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.message {
  padding: 1.6rem;
  max-width: 60rem;
  p {
    font-size: 2rem;
  }
  span {
    font-size: 1.5rem;
  }
  &:not([class$="yours"]) {
    background-color: #fff;
    text-align: left;
    border-radius: 10px 10px 10px 0;
    margin-right: auto;
    p {
      color: $c-text-primary;
    }
    span {
      color: #B7B6BB;
    }
  }
  &.yours {
    background-color: $c-bg-primary-alt;
    border-radius: 10px 10px 0 10px;
    text-align: right;
    margin-left: auto;
    p {
      color: #fff;
    }
    span {
      color: #A1BBFF;
    }
  }
}
</style>
