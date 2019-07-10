<!-- Template je HTML parce koda koje ce biti ubaceno u DOM. 
Posto se ova komponenta renderuje u main.js, ovaj HTML kod ce zavrsiti umetnut u div sa id-jem app.
Template mora da ima samo jedan root HTML element! -->
<template>
  <!-- root element -->
  <div> <!---->
    <!-- Coupons tag je zahtev da se na mestu ovog taga izrenderuje template Coupons komponente. 
    Ovaj tag je moguc ako se komponenta doda u listu komponenti (components) u skirpt sekciji.
    v-bind:coupons="coupons" znaci da za komponentu Coupons vezujemo promenljivu coupons 
    (iz data() u skript zekciji, ovo je pod navodnicima) pod imenom coupons (ime promenljive je posle ':')-->
    <Coupons v-bind:coupons="coupons"/> 
  </div>
</template>

<script>
/* Pre nego sto budemo uopste mogli da koristimo komponente u 
template-u moramo da ih importujemo i zaregistrujemo u "components" */

import Coupons from "./UserCoupons";


/* Importovali smo svoja dva modula za klijente. Klijenti ce pozivati BE.
*/
import CouponClient from "@/clients/coupon-client.js"
import ShopClient from "@/clients/shop-client.js"

export default {
  name: "User",  // name: Definise ime komponente

  /* components: Lista komponenti. Zaregistruje importovane komponente. 
  Ove komponente sada mozemo koristiti u template-u. */
  components: {
    Coupons
  }, 

  /* data: Mora biti funkcija koja vraca objekat. 
  Taj objekat ce sadrzati podatke koje ce ova komponenta koristiti. 
  Svi podaci zaregistrovani u data sekciji mogu se pristupiti sa this npr. this.coupons */
  data() {
    return {
      coupons: [],
      shops: [],
      users: []
    };
  }, 

  /* methods: Funkcije dostupne ovoj komponenti cak i u template-u. 
  Kao i u data sekciji ovim metodama mozemo pristupiti sa this.*/
  methods: {

  },
  /* created: ovde stavljamo kod koji ce se izvrsiti cim se stranica i komponente ucitaju
   */
  created() {
    CouponClient.loadActiveCoupons(this);
    ShopClient.loadShops(this);
  }
};
</script>

<!-- Style je sekcija namenjena za CSS. Ukoliko style poseduje keyword scoped, to znaci da ce 
CSS biti primenjen iskljucivo na tu komponentu. -->

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
