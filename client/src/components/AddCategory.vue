<template>
  <div class="add-cat">
    <input 
      type="text" 
      class="input-cat"
      v-model="categoryText"
    >
    <v-btn round small class="warning" @click="createCategory()" id="del-button">
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
    // ...mapGetters(['curId']),
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
    ...mapActions(['changeCategoryText', 'addCategory']),
    createCategory() {
      const trimmedCategory = this.categoryText.trim();
      this.incrementCurId;
      if (trimmedCategory) {
        this.addCategory({category_name: trimmedCategory, id: this.curId});
      }
    },
    incrementCurId() {
      ++this.curId;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';

.input-cat {
  padding: 4px 10px;
  border: 1px solid $vue-blue;
  margin: 5px 0;
  width: 100%;
}

</style>

