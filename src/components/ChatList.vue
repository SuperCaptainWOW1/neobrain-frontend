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
        :friendName="chat.friendName"
        :lastMessage="chat.lastMessage"
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
    activeChatId: null,
    chats: [
      { id: 1, friendName: 'Senya', lastMessage: 'Bruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruhBruh, you bruh' },
      { id: 2, friendName: 'Andruxa', lastMessage: 'Bruh, you bruh' },
      { id: 3, friendName: 'Eugene', lastMessage: 'Bruh, you bruh' },
      { id: 4, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
      { id: 5, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
      { id: 6, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
      { id: 7, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
      { id: 8, friendName: 'Chuvak', lastMessage: 'Bruh, you bruh' },
    ],
  }),
  methods: {
    // chooseChat(id, e) {
    //   if (!this.activeChatId) {
    //     e.target.classList.add('active');
    //   }
    //   this.activeChatId = id;
    //   console.log(this.chats.find((c) => c.id === id));
    // },
  },
  computed: {
    chatsFiltered() {
      if (this.searchChatQuery) {
        return this.chats.filter((item) => item.friendName
          .toLowerCase()
          .includes(this.searchChatQuery.toLowerCase()));
      }
      return this.chats;
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
  overflow-y: scroll;
  max-height: calc(100vh - 36.3rem);
}

::-webkit-scrollbar { width: 3px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #fff;  height: 0;}
::-webkit-scrollbar-track {  background-color: #e7e7e7;}
::-webkit-scrollbar-track-piece { background-color: #fff;}
::-webkit-scrollbar-thumb { height: 5px; background-color: $c-text-secondary; border-radius: 3px;}
::-webkit-scrollbar-corner { background-color: #fff;}
::-webkit-resizer { background-color: #fff;}
</style>
