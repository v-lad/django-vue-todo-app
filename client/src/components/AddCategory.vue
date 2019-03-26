<template>
  <div class="add-cat">
    <input 
      type="text" 
      class="input-cat"
      v-model="categoryText"
      @keydown.enter="addCategory"
    >
    <v-btn round small class="warning" @click="addCategory" id="del-button">
      <v-icon>add</v-icon>
      Add category
    </v-btn>  
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "AddCategory",
  computed: {
    categoryText: {
      get() {
        return this.$store.getters.categoryText;
      },
      set(newCat) {
        this.changeCategoryText(newCat);
      },
    },
  },
  methods: {
    ...mapActions(['changeCategoryText', 'createCategory']),
    addCategory() {
      const trimmedCategory = this.categoryText.trim();
      if (trimmedCategory) {
        this.createCategory({category_name: trimmedCategory});
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.input-cat {
  padding: 4px 10px;
  border: 1px solid $vue-white;
  margin: 5px 0;
  width: 100%;
}

</style>

