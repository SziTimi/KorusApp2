<template>
    <div class="registration-form">
      <form @submit.prevent="register" class="form">
        <div class="form-group">
          <label for="username">Felhasználónév:</label>
          <input type="text" id="username" v-model="formData.username" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="email">E-mail cím:</label>
          <input type="email" id="email" v-model="formData.email" required class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Jelszó:</label>
          <input type="password" id="password" v-model="formData.password" required class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Regisztráció</button>
      </form>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: "Registration",
    data() {
      return {
        formData: {
          email: "",
          username: "",
          password: "",
        },
      };
    },
    methods: {
      async register() {
        try {
          // Helyezd ide az adatbázisba történő regisztráció logikáját
          console.log("Regisztrációs adatok:", this.formData);
        } catch (error) {
          console.error("Hiba a regisztráció során", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .form {
    background-color: #81d0d0;
    padding: 20px;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  