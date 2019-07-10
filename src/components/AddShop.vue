<template>
  <!-- Koriste v-on odreagovacemo na submit pozivom addCoupon -->
  <form v-on:submit="addShop">

    <input type="text" v-model="name" name="name" placeholder="Name" required>
    <input type="submit" value="Create">

  </form>
</template>

<script>
export default {
  name: "AddShop",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance App.vue komponente. 
  Ove promenljive mozemo koristiti u template sekciji*/
  props: [],
  data() {
    return {
      name:""
    };
  },
  methods: {
    addShop(e) {
      // Sprecavamo default-no ponasanje forme
      e.preventDefault();

      // Kreiramo kupon onako kako ga BE ocekuje na osnovu polja u data() koja su popunjena od strane template-a
      const newShop = {
        name: this.name
      };

      /* Kreiramo event koji ce isplivati do parent-a sa $emit funkcijom i prosledjujemo mu novokreirani kupon. 
      Ovaj event ce se zvati add-coupon. Parent ce uhvatiti ovaj event sa v-on:add-coupon. Ovo radimo jer je parent
      vlasnik svih kupona i parent je taj koji ima logiku za kontaktiranje BE.
      */
      this.$emit("add-shop", newShop);

      // Vracamo sve vrednosti na staro
      this.name = "";


      // Sprecavamo default-no ponasanje forme
      return false;
    }
  }
};
</script>

<style scoped>
</style>