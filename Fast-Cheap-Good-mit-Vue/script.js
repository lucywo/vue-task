Vue.createApp({
  data() {
    return {
      checkboxes: [
        { id: 'fast', checked: false },
        { id: 'cheap', checked: false },
        { id: 'good', checked: false }
      ]
    };
  },
  methods: {
    handleCheckboxChange(index) {
      const checkboxes = this.checkboxes;

      // Zähle die Anzahl der ausgewählten Checkboxen
      const checkedCount = checkboxes.filter(checkbox => checkbox.checked).length;

      if (checkedCount > 2) {
        let firstCheckedIndex = -1;
        let secondCheckedIndex = -1;

        // Index der ersten beiden ausgewählten Kästchen finden
        checkboxes.forEach((checkbox, i) => {
          if (checkbox.checked) {
            if (firstCheckedIndex === -1) {
              firstCheckedIndex = i;
            } else if (secondCheckedIndex === -1) {
              secondCheckedIndex = i;
            }
          }
        });

        // Das vorherige zweite Kästchen deaktivieren
        checkboxes[secondCheckedIndex].checked = false;
      }
    }
  }
}).mount('#app');
