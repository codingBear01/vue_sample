/* Vue Component */
// first argument is the name of component, second argument is the obj to configure component
app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <!-- v-bind: dynamically bind an attribute  to an expression -->
          <!-- you can write also like this for   dynamic attribute 
            :src="image"
            :class="image"...
          -->
          <img
            v-bind:src="image"
            alt="socks_green"
            :class="[inStock ? '' :   'out-of-stock-img']"
          />
        </div>
        <div class="product-info">
          <!-- inside of double curly brace refers  product property in Vue app -->
          <h1 v-show="onSale">{{ title }}</h1>
          <p>{{ sale }}</p>
          <!-- if inStock is true, show the first p   tag, otherwise show the second p tag -->
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>

          <p>Shipping: {{ shipping }}</p>

          <!-- v-show is used for toggling in el's  visibility. if value is false,   display:none will be added -->
          <!-- <p v-show="inStock">In Stock</p> -->
  
          <!-- you can use multiple conditions -->
          <p v-if="inventory > 10">In Stock {{  inventory }}</p>
          <p v-else-if="inventory <= 10 && inventory  > 0">
            Almost sold out {{ inventory }}
          </p>
          <p v-else>10">Out of Stock</p>
          <p v-if="onSale">On Sale</p>
          <p>{{ desc }}</p>

          <product-details :details="details"></product-details>
          
          <ul>
            <li v-for="size in sizes">{{ size }}</li>
          </ul>
          <!-- @mouseover = hover event -->
          <!-- you should write style property name   by camel case cuz that's javascript or  kebab case like this 'background-color' -->
          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color} "
          ></div>
          <!-- v-on listens to events(ex. click)
          you can write like this @click='method' -->
          <!-- :class is applied whenever !inStock  -->
          <button
            class="button"
            :class="{ disabledButton: !inStock}"
            :disabled="!inStock"
            v-on:click="addToCart"
          >
            Add to Cart
          </button>
          <button class="button"  v-on:click="subtractFromCart">
            Subtract from Cart
          </button>
        </div>
      </div>
      <review-list v-if="reviews.length" :reviews="reviews"></review-list>
      <review-form @review-submitted="addReview"></review-form>
    </div>`,
  data() {
    return {
      product: 'Socks',
      desc: 'This Socks are so comfortable',
      selectedVariant: 0,
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
      brand: 'Vue Mastery',
      reviews: [],
    };
  },
  methods: {
    addToCart() {
      // emitting up event
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    subtractFromCart() {
      this.$emit('subtract-from-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
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
    shipping() {
      return this.premium ? 'Free' : '$2.99';
    },
  },
});
