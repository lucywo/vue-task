const app = Vue.createApp({
    data() {
      return {
        books: [
          { title: 'Book 1', author: 'Author 1', price: 10, publisher: "O'Reilly Media" },
          { title: 'Book 2', author: 'Author 2', price: 20, publisher: 'Other Publisher' },
          { title: 'Book 3', author: 'Author 3', price: 15, publisher: "O'Reilly Media" },
        ]
      };
    },
    computed: {
      tableHead() {
        return Object.keys(this.books[0]);
      },
      filteredBooks() {
        return this.books.filter(book => book.publisher === "O'Reilly Media");
      }
    },
    methods: {
      calculateDiscountedPrice(price) {
        return price * 0.8; // 20% discount
      }
    }
  });
  
  app.mount('#app');