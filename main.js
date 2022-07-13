/* create Vue app */
// Options obj for configuring Vue app(neccessary)
const app = Vue.createApp({
  // data() return full of data
  data() {
    return {
      product: 'Socks',
      desc: 'This Socks are so comfortable',
      image: './assets/images/socks_blue.jpg',
      url_naver: 'https://www.naver.com',
      inStock: false,
      onSale: true,
      inventory: 5,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      cart: 0,
    };
  },
  methods: {
    addToCart() {
      // this means data
      this.cart += 1;
    },
    subtractFromCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
