<template>
  <div>
    <h1>Coupons</h1>
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
        <tr v-bind:key="coupon.id" v-for="coupon in couponsPaginated">
          <td>{{ coupon.productName }}</td>
          <td>
            <router-link :to="{ name: 'shop', params: { id: coupon.shop.id } }">{{ coupon.shop.name }}</router-link>
          </td>
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
      <div>
            <button id="btn" @click="paginateToLeft()">Left</button>
            <label>{{firstResult}} - </label>   
            <label>{{maxResult+firstResult}}</label>
            <button id="btn" @click="paginateToRight()">Right</button>

      </div>
  </div>
  
</template>

<script>


import CouponClient from "@/clients/coupon-client.js"

export default {
  name: "Coupons",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance App.vue komponente. 
  Ove promenljive mozemo koristiti u template sekciji*/
  props: ["coupons", "shops","couponsPaginated"],
  data(){
    return{
      firstResult:0,
      maxResult:5
    }
  },
  mounted(){
    CouponClient.loadPaginatedCoupons(this.firstResult,this.maxResult,this);
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
        paginateToLeft(){
            this.firstResult = this.firstResult-this.maxResult;
            CouponClient.loadPaginatedCoupons(this.firstResult,this.maxResult,this);
        },
        paginateToRight(){
            this.firstResult = this.firstResult+this.maxResult;
            CouponClient.loadPaginatedCoupons(this.firstResult,this.maxResult,this);
        }
    },
 
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
td:nth-child(8n+4) {
    background-color: red;
}

td:nth-child(8n+3) {
    background-color: green;
}

td {
  padding: 0 5px;
}
</style>