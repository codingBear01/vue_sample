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
      inStock: true,
      onSale: true,
      inventory: 5,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' },
      ],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    };
  },
});
