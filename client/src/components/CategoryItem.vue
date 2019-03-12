<template>
  <li>
    <a id="cat-link" href="#">{{ category.category_name }}</a>
    <v-btn icon small class="error" @click="removeCat" id="del-button">
      <v-icon>clear</v-icon>
    </v-btn>
  </li>
  
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    category: {
      type: Object,
      // required: True,
    }
  },
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
  }
}

</style>
