/* Vue App */
// Options obj for configuring Vue app(neccessary)
const app = Vue.createApp({
  // data() return full of data
  data() {
    return {
      cart: [],
      url_naver: 'https://www.naver.com',
      premium: false,
    };
  },
  methods: {
    // declare methods to update cart cnts
    incCart(id) {
      this.cart.push(id);
    },
    decCart(id) {
      this.cart.pop(id);
    },
  },
});
