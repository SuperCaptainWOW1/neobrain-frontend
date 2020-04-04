<template>
  <button @click.prevent="click">{{ content }}</button>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: 'Button',
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';
@import '@/assets/scss/_mixins';

button {
  @include BaseButtonStyle('standard');
}
</style>
