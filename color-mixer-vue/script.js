Vue.createApp({
    data() {
      return {
        red: 10,
        green: 150,
        blue: 150,
      };
    },
    computed: {
      hex() {
        function toHex(value) {
          const hex = value.toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        }
        return "#" + toHex(this.red) + toHex(this.green) + toHex(this.blue);
      },
      giveMeStyle() {
        return {
          backgroundColor: `rgb(${this.red}, ${this.green}, ${this.blue})`,
        };
      },
    },
  }).mount("#app");
  