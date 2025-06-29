import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    setUser(data) {
      this.user = data.user;
      this.token = data.token;
    },
    logout() {
      this.token = null;
      this.user = null;
    }
  }
});
