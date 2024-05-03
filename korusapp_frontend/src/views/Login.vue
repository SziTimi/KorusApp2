<template>
  <div class="login-form">
    <div class="form">
      <h1>Bejelentkezés</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input type="text" placeholder="Felhasználónév" v-model="username" autocomplete="username" required>
        </div>
        <div class="form-group">
          <input type="password" placeholder="Jelszó" v-model="password" autocomplete="current-password" required>
        </div>
        <button type="submit">Bejelentkezés</button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '@/utils/http';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      // Egyszerű ellenőrzés (ideiglenes)
      if (this.username === 'admin' && this.password === 'admin') {
        login(); // Bejelentkezett státusz beállítása
        this.$router.push('/'); // Visszairányítás a főoldalra
        alert('Sikeres bejelentkezés!');
      } else {
        alert('Hibás felhasználónév vagy jelszó!');
      }
    }
  }
  /*methods: {
    handleLogin() {
      // Ideális esetben itt egy API hívással ellenőrizzük a felhasználói adatokat
      login(); // Egyszerűség kedvéért itt közvetlenül beállítjuk a bejelentkezett státuszt
      this.$router.push('/'); // Visszairányítás a főoldalra
    }
  }*/
}
</script>


<style scoped>
.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  background-color: #81d0d0;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #006060;
  color: white;
  cursor: pointer;
}
</style>