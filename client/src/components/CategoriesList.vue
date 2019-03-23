<template>
  <div>
    <h2>Categories</h2>
    <ul v-if="categories.length">
      <CategoryItem
        v-for="cat in categories"
        :key="cat.id"
        :category="cat"
      />
    </ul>
  </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue'
export default {
  components: {
    CategoryItem,
  },
  computed: {
    categories: {
      get() {
        return this.$store.getters.categories;
      },
    },
  },
}
</script>

<style lang="scss" scoped>

ul {
  margin-bottom: 20px;
}

</style>
