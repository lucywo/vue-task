const app = Vue.createApp({
    data() {
      return {
        books: [
          { title: 'Book 1', author: 'Author 1', price: 10 },
          { title: 'Book 2', author: 'Author 2', price: 20 },
          { title: 'Book 3', author: 'Author 3', price: 15 },
        ]
      };
    }
  });
  
  app.mount('#app');