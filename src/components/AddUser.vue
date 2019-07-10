<template>
  <!-- Koriste v-on odreagovacemo na submit pozivom addCoupon -->
  <form v-on:submit="addUser">

    <input type="text" v-model="firstName" name="FirstName" placeholder="First name" required>
    
    <input type="text" v-model="lastName" name="LastName" placeholder="Last name" required>
    
    <input type="text" v-model="privilegeLevel" name="PrivilegeLevel" placeholder="Privilege level" required>
   
    <input type="text" v-model="username" name="Username" placeholder="Username" required>
    
    <input type="text" v-model="password" name="Password" placeholder="Password" required>
  
    <input type="submit" value="Create">
  </form>
</template>

<script>
export default {
  name: "AddUser",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance App.vue komponente. 
  Ove promenljive mozemo koristiti u template sekciji*/
  props: [],
  data() {
    return {
      privilegeLevel: "",
      firstName:"",
      lastName:"",
      username:"",
      password:""
    };
  },
  methods: {
    addUser(e) {
      // Sprecavamo default-no ponasanje forme
      e.preventDefault();

      // Kreiramo kupon onako kako ga BE ocekuje na osnovu polja u data() koja su popunjena od strane template-a
      const newUser = {
        privilegeLevel: this.privilegeLevel,
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password
      };

      /* Kreiramo event koji ce isplivati do parent-a sa $emit funkcijom i prosledjujemo mu novokreirani kupon. 
      Ovaj event ce se zvati add-coupon. Parent ce uhvatiti ovaj event sa v-on:add-coupon. Ovo radimo jer je parent
      vlasnik svih kupona i parent je taj koji ima logiku za kontaktiranje BE.
      */
      this.$emit("add-user", newUser);

      // Vracamo sve vrednosti na staro
      this.privilegeLevel = "";
      this.firstName = "";
      this.lastName = "";
      this.username = "";
      this.password = "";

      // Sprecavamo default-no ponasanje forme
      return false;
    }
  }
};
</script>

<style scoped>
</style>