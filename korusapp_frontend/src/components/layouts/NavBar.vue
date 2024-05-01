<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/login">Bejelentkezés</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="navbar-brand" to="/registration"
              >Regisztráció</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/calendar"
              >Naptár</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/absenceform"
              >Hiányzásbejelentő</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/musiclibarylink"
              >Kottatár</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="navbar-brand" to="/news">Hírek</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>

import { RouterLink } from "vue-router";

</script>

<style scoped>
.container {
  /* Navigációs sáv stílusai */
  background-color: grey;
  padding: 10px;
  text-align: center;
  margin: 0 auto;
  text-decoration: none;
  color: black;
}
</style>
