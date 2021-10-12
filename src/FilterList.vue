<template>
  <div>
        <hr>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filtered" v-bind:key="product.id">{{ product }}</li>
        </ul>
    </div>
</template>


<script>
import { productMixin } from "./productMixin"

export default {
    mixins: [productMixin],
    created(){
      console.log("List Created");
    //   productMixin.

  }
}
</script>
