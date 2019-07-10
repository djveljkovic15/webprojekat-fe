<template>
  <div>
    <h1>Shops</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for sluzi da kreira HTML element <tr> za svaki element u nizu coupons-->
        <tr v-bind:key="shop.id" v-for="shop in shops">
          <td>{{ shop.name }}</td>
          <td>
            <button id="btn" @click="deleteShop(shop.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Shops",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance App.vue komponente. 
  Ove promenljive mozemo koristiti u template sekciji*/
  props: ["shops"],
   
   methods: { 
        deleteShop(shopId){
              const xHttp = new XMLHttpRequest();
                    xHttp.onreadystatechange = function() {
                        if (this.readyState === 4 && this.status === 200) {
                           //window.location.reload()
                        }
                    }
                    xHttp.open('DELETE', 'http://localhost:8080/dzo/shops/delete/' + shopId, true);
                    xHttp.send();
        }
    }
  
};
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