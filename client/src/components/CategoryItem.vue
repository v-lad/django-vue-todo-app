<template>
  <li>
    <a id="cat-link" href="#">
      <div>
        {{ category.category_name }}
        <v-btn icon small class="error del-cat" @click="removeCat" id="del-button" v-if="category.category_name !== 'Main'">
          <v-icon>clear</v-icon>
        </v-btn>
      </div>
    </a>    
  </li>
  
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
    }
  },
  methods: {
    removeCat() {
      this.$store.dispatch('removeCategory', this.category.id);
    }
  }
}
</script>

<style lang="scss" scoped>
button.error {
  i {
    font-size: 14px;
  }
}

li {
  list-style-type: none;

  a {
    color: white;
    font-size: 17px;
    text-decoration: none;
    display: block;
    padding: 10px;
    word-break: break-all;
    // position: relative;
    // display: flex;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    // .del-cat {
    //   display: flex;
    // }
  }

  a:hover {
    background-color: #333;
  }
}

</style>
