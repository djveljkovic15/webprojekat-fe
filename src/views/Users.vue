<template>
  <div>
    <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>username</th>
          <th>privilege</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for sluzi da kreira HTML element <tr> za svaki element u nizu coupons-->
        <tr v-bind:key="user.id" v-for="user in users">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.privilegeLevel }}</td>
          <td>
            <button >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Users",

  /* props: To su promenljive koje ova komponenta moze da primi od strane drugih komponenti.
  Ovoj komponenti je prosledjena lista kupona koristeci v-bind:coupons od strance App.vue komponente. 
  Ove promenljive mozemo koristiti u template sekciji*/
  props: ["users"]
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