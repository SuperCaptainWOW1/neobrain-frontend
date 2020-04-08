/* eslint-disable max-len */
<template>
  <div class="chat-list">

    <button class="new-converstion-btn">
      <img src="../assets/plus.svg" alt="New conversation">
      <span class="content">
        New conversation
      </span>
    </button>

    <h2>Chats</h2>
    <input type="text" v-model="searchChatQuery" placeholder="Search here">

    <div class="chats">
      <ChatItem
        v-for="chat in chatsFiltered"
        @click="chooseChat(chat.id)"
        :friendName="chat.friendName"
        :lastMessage="chat.lastMessage"
        :ref='`chat-${chat.id}`'
        :key="chat.id"
      />
    </div>
  </div>
</template>

<script>
import ChatItem from './ChatItem.vue';

export default {
  name: 'ChatList',
  data: () => ({
    searchChatQuery: '',
  }),
  methods: {
    chooseChat(id) {
      const activeChatId = this.$store.getters.getActiveChatId;

      if (activeChatId) {
        this.$refs[`chat-${activeChatId}`][0].$el.classList.remove('active');
      }

      this.$store.dispatch('chooseChat', id);

      this.$refs[`chat-${id}`][0].$el.classList.add('active');
    },
  },
  computed: {
    chatsFiltered() {
      const chats = this.$store.getters.getChats;

      if (this.searchChatQuery) {
        return chats.filter((item) => item.friendName
          .toLowerCase()
          .includes(this.searchChatQuery.toLowerCase()));
      }
      return chats;
    },
  },
  components: {
    ChatItem,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables';

.chat-list {
  display: flex;
  flex-direction: column;
  max-width: 330px;
  padding: 3.5rem;
  position: relative;
}

.new-converstion-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: $c-text-primary;
  font-size: 2rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba($color: #000000, $alpha: 0.08);
  max-width: 28.5rem;
    img {
      border-right: 1px solid #EFEFEF;
      padding: 1.2rem 0;
      padding-right: 1.5rem;
    }
    .content {
      padding-left: 1.5rem;
    }
}

h2 {
  margin: 2rem 0;
  font-weight: 700;
  font-size: 4.2rem;
  color: $c-text-primary;
}

.chats {
  overflow: hidden;
  max-height: calc(100vh - 36.3rem);
  position: relative;
}

.chats:hover {
  overflow-y: scroll;
}

::-webkit-scrollbar { width: 6px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #fff;  height: 0;}
::-webkit-scrollbar-track {  background-color: #e7e7e7;}
::-webkit-scrollbar-track-piece { background-color: rgba($color: $c-bg-primary, $alpha: 0.1);}
::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: rgba($color: $c-text-secondary, $alpha: 0.35);
  border-radius: 3px;
}
::-webkit-scrollbar-corner { background-color: #fff;}
::-webkit-resizer { background-color: #fff;}
</style>
