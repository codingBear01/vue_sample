app.component('review-form', {
  template:
    // @submit.prevent prevents default page refresh and trigger onSubmit method
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="recommend">Recommend:</label>
      <select id="recommend" v-model.number="recommend">
        <option>YES</option>
        <option>NO</option>
      </select>

      <input class="button" type="submit" value="Submit" />
    </form>
  `,
  date() {
    return {
      // v-model binds input and data
      name: '',
      review: '',
      rating: null,
      recommend: null,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === '' ||
        this.review === '' ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert('Review is incomplete. Please fill out every field.');
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      // $emit('emitted event name', 'payload')
      this.$emit('review-submitted', productReview);
      (this.name = ''),
        (this.review = ''),
        (this.rating = null),
        (this.recommend = null);
    },
  },
});
