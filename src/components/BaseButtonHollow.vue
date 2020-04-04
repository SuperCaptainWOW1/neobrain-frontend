<template>
  <button>{{ content }}</button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Button',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
@import '@/assets/scss/_mixins';

button {
  @include BaseButtonStyle('hollow');
}
</style>
