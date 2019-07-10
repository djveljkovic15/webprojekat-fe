<template>
  <div>
    <h2>{{shops.name}}</h2>
    <table id="coupon-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Shop</th>
          <th>New Price</th>
          <th>OldPrice</th>
          <th>Valid from</th>
          <th>Valid to</th>
          <th>Discount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for sluzi da kreira HTML element <tr> za svaki element u nizu coupons-->
        <tr v-bind:key="coupon.id" v-for="coupon in coupons">
          <td>{{ coupon.productName }}</td>
          <td>{{ coupon.shop.name }}</td>
          <td>{{ coupon.newPrice }}</td>
          <td>{{ coupon.oldPrice }}</td>
          <td>{{ coupon.validFrom }}</td>
          <td>{{ coupon.validTo }}</td>
          <td>{{(100 / (coupon.oldPrice*1.0 / (coupon.oldPrice-coupon.newPrice))).toFixed(2)+"%"}}</td>
           <td>
            <button id="btn" @click="deleteCoupon(coupon.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import CouponClient from "@/clients/coupon-client.js"
import ShopClient from "@/clients/shop-client.js"

export default {
  name: "Shop",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance App.vue komponente. 
  Ove promenljive mozemo koristiti u template sekciji*/
  props: ["coupons", "shops"],

  data(){
    return{
      shop:{
        id:"",
        name:"",
        coupons: []
      },
      naziv:""
      
    }

  },
  created() {
          this.id = this.$route.params.id;
          //this.findShopById(this.id);
          //this.findShopById(this.$route.param.id);
          //this.name = this.findShopById(this.id);


          CouponClient.loadCouponsFromShop(this.id,this)
          ShopClient.findShopById(this.id, this)
      },
  methods: {
        deleteCoupon(couponId){
              const xHttp = new XMLHttpRequest();
                    xHttp.onreadystatechange = function() {
                        if (this.readyState === 4 && this.status === 200) {
                           //window.location.reload()
                        }
                    }
                    xHttp.open('DELETE', 'http://localhost:8080/dzo/coupons/delete/' + couponId, true);
                    xHttp.send();
        },
        deleteShop(shopId){
             const xHttp = new XMLHttpRequest();
                    xHttp.onreadystatechange = function() {
                        if (this.readyState === 4 && this.status === 200) {
                            //window.location.reload()
                        }
                    }
                    xHttp.open('DELETE', 'http://localhost:8080/dzo/shops/delete/' + shopId, true);
                    xHttp.send();
        },
         findShopById(id) {
                const xHttp = new XMLHttpRequest();
                const vue = this;
                    xHttp.onreadystatechange = function () {
                        if (this.readyState === 4) {
                            if (this.status === 200) {
                                //const shop = JSON.parse(this.response);
                                vue.naziv = JSON.parse(this.response).name;
                            } 
                        }
                    xHttp.open('GET', 'http://localhost:8080/dzo/shops/find/' + id, true);
                    xHttp.setRequestHeader('Content-Type', 'application/json');
                    xHttp.send();
                    }
          }
  }
}
</script>

<style scoped>

table {
  border-collapse: collapse;
  margin-bottom: 20px;
}

table, th, td {
  border: 1px solid black;
}

td {
  padding: 0 5px;
}
</style>