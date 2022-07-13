/* create Vue app */
// Options obj for configuring Vue app(neccessary)
const app = Vue.createApp({
  // data() return full of data
  data() {
    return {
      product: 'Socks',
      desc: 'This Socks are so comfortable',
      selectedVariant: 0,
      url_naver: 'https://www.naver.com',
      onSale: true,
      inventory: 5,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
        },
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      cart: 0,
      brand: 'Vue Mastery',
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      return this.onSale ? `${this.brand} ${this.product} is on sale.` : '';
    },
  },
});
