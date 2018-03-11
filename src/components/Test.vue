<template>
<div >
    <div v-show="active">
        <img src="@/assets/logo.png">
        <router-link to="/registro">Registrar a nuevo aspirante</router-link>
        <input v-model="mensaje"/>
  <h1>{{titulo2}}</h1>
  <h2>{{mensaje}}</h2>
    <p>Usuarios Registrados:{{numberUsers}}</p>
  <li v-bind:key="user" v-for="user in users">{{user}}</li>
  </div>
  <button v-on:click="disable">{{this.active?"Quitar":"POner"}}</button>
  
  <p>Dame mas nombres</p>
  <input v-on:keyup.enter="addUser"/>
  
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    titulo2: {
      default: "Esto si es default",
      type: String
    }
  },
  data() {
    return {
      mensaje: "que pasara que misterio habra",
      users: ["Esteban", "Juan"],
      active: true
    };
  },
  computed: {
    numberUsers: function() {
      return this.users.length;
    }
  },
  methods: {
    disable: function() {
      this.active = !this.active;
    },
    addUser: function(e) {
      const user = e.target.value.trim();
      if (user) {
        this.users.push(user);
        e.target.value = "";
      }
    }
  }
};
</script>
