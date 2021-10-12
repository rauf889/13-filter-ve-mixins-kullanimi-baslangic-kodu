export const productMixin={
data(){
    return{
      products: ["Monitor", "Klavye", "Masa", "Sise", "Kitap"],
      searchText: ''
    }
  },
  computed:{
    filtered(){
      return this.products.filter((element)=>{
        return element.match(this.searchText);
      })
    }
  },
  created(){
      console.log("Mixin Created");
  }
}