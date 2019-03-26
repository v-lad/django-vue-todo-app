<template>
  <li>
    <router-link 
      id="cat-link" 
      :to="'catId=' + String(category.id)"
      :class="{ active: isActive }"
    >
      <div>
        {{ category.category_name }}
        <v-btn 
          icon 
          small 
          class="error del-cat" 
          @click="removeCat" 
          id="del-button" 
          v-if="category.category_name !== 'Main'"
        >
          <v-icon>clear</v-icon>
        </v-btn>
      </div>
    </router-link>    
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  // data() {
  //   return {
  //     isActive: Number(this.$route.params.category) === this.category.id ? true : false,
  //   }
  // },
  props: {
    category: {
      type: Object,
    }
  },
  computed: {
    isActive() { 
      return this.$store.getters.currentCategoryId === this.category.id
    },
  },
  methods: {
    removeCat() {
      this.$store.dispatch('removeCategory', this.category.id);
    },    
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

  #cat-link {
    color: white;
    font-size: 17px;
    text-decoration: none;
    display: block;
    padding: 10px;
    word-break: break-all;

    &:hover {
      background-color: #333;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .active, .active:hover {
    background-color: #000!important;
  }
}
</style>
