const app = Vue.createApp({
    data() {
      return {
        activeTab: 0,
        tabs: ['Tab 1', 'Tab 2', 'Tab 3']
      };
    },
    methods: {
      setActiveTab(index) {
        this.activeTab = index;
      }
    }
  });
  
  app.mount('#app');