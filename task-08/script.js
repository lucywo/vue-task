const app = Vue.createApp({
    data() {
      return {
        x: 0,
        y: 0,
        fruits: [
          { id: 1, name: '🍎 Apple' },
          { id: 2, name: '🍌 Banana' },
          { id: 3, name: '🍊 Orange' },
          { id: 4, name: '🍇 Grape' },
          { id: 5, name: '🍓 Strawberry' },
          { id: 6, name: '🥝 Kiwi' },
          { id: 7, name: '🍉 Watermelon' }
        ]
      };
    },
    methods: {
      updateCoordinates(event) {
        const rect = event.target.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
  
        if (
          offsetX >= 50 && offsetX <= 150 &&
          offsetY >= 50 && offsetY <= 150
        ) {
          // Ignore coordinates inside the inner rectangle
          return;
        }
  
        this.x = offsetX;
        this.y = offsetY;
      },
      removeFruit(id) {
        this.fruits = this.fruits.filter(fruit => fruit.id !== id);
      }
    }
  });
  
  app.mount('#app');