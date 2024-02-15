  import cartStore from "../store/cartStore.js";
  const { mapState, mapActions } = Pinia;
  
  export default {
    template: ` <div class="container mt-5 my-4 p-4">
    <div class="bg-light p-4">
        <div v-if=" !cartList.carts.length">
            購物車沒有任何品項
        </div>
        
        <table v-else class="bg-light table align-middle">
            <tbody>
                <tr v-for="item in cartList.carts" :key="item.id">
                    <td width="100" class="bg-light">
                        <a href="#" class="text-dark" style="text-decoration:none"
                        @click.prevent="removeCartItem(item.id)"
                        >x</a>
                    </td>
                    <td width="50" class="bg-light">
                        <img :src="item.product.imageUrl"
                            alt="" class="table-image">
                    </td>
                    <td width="100" class="bg-light">{{ item.product.title }}</td>
                    <td width="100" class="bg-light">
                        <select name="" id="" class="form-select" :value="item.qty"
                        @change="(evt) => setCartQty(item.id, evt)">
                            <option :value="i" v-for="i in 10" :key="i">{{ i }}</option>
                        </select>
                    </td>
                    <td width="100" class="bg-light text-end">$ {{ item.subtotal }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5" class="bg-light text-end">總金額 NT$ {{ cartList.total }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>`,
computed:{
    ...mapState(cartStore,['cartList'])
},
methods:{
    ...mapActions(cartStore,['removeCartItem','setCartQty'])
}
  }