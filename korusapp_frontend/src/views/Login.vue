<template>
  <!-- Bejelentkezési űrlap -->
  <div class="login-form">
    <form @submit.prevent="login" class="form">
      <div class="form-group">
        <label for="username">Felhasználónév:</label>
        <input type="text" id="username" v-model="credentials.username" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Jelszó:</label>
        <input type="password" id="password" v-model="credentials.password" autocomplete="additional-name" required class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Bejelentkezés</button>
    </form>
  </div>
</template>

<script>
import { http } from "@/utils/http";

export default {
  name: "login",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
        // Az API hívás
        const response = await http.post("/login", this.credentials);
        
        // Ellenőrizzük a válasz státuszát
        if (response.status === 200) {
          console.log("Sikeres bejelentkezés", response.data);
          // További logika, mint például átirányítás vagy állapot frissítése
        } else {
          console.error("Hibás válasz státusz", response.status);
        }
      } catch (error) {
        console.error("Hiba a bejelentkezés során", error);
      }
    },
  },
};
</script>

<style scoped>
.login-form {
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
