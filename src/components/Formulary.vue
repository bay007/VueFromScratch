<template>
    <div>
        <router-link to="/">Regresar</router-link>
        <h1>{{UsersFormTitle}}</h1>
        <form v-on:submit="addUser">
            <input v-model="newUser.name" type="text" placeholder="Enter Name"/>
            <br/>
            <input v-model="newUser.email" type="email" placeholder="Enter email"/>
            <br/>
            <input  type="submit" value="Registrar"/>

        </form>

        <ul >
            <li v-for="user in users" :key="user.email">
             
             <div :class="{contacted:user.contacted}">
                 <input type="checkbox" v-model="user.contacted">
                 {{user.name}}##{{user.email}}<button v-on:click="deleteUser(user)">X</button>
             </div>
              
            </li>
        </ul>
    </div>
</template>


<script>
export default {
  name: "UsersForm",
  props: {
    UsersFormTitle: {
      default: "Formulario",
      type: String
    }
  },
  data() {
    return {
      newUser: {},
      users: []
    };
  },
  computed: {},
  methods: {
    deleteUser: function(user) {
      if (user.contacted) {
        this.users.splice(this.users.indexOf(user), 1);
        return;
      }
      alert("Usuario no contactado: " + user.email);
    },
    addUser: function(data) {
      data.preventDefault();
      const user = this.newUser.name;
      const email = this.newUser.email.trim();
      if (user.trim() && email) {
        this.users.push({
          name: user,
          email: email,
          contacted: false
        });
        this.newUser.name = "";
        this.newUser.email = "";
      }
    }
  },
  created: function(e) {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then(response => {
      response.json().then(json => {
        this.users = json;
      });
    });
  }
};
</script>

<style scoped>
.contacted {
  text-decoration-line: line-through;
}
</style>
