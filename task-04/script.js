const app = Vue.createApp({
    data() {
      return {
        activeTab: 'tab1'
      };
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
      }
    }
  });
  
  app.mount('#app');