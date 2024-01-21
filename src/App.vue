<template>
  <div class="navbar">
    <h1>Vue + Vue Router + Vite Template</h1>
    <div>
      <router-link class="navbutton" to="/">Home</router-link>
      <router-link class="navbutton" to="/about">About</router-link>
      <router-link class="navbutton" to="/no-exist">404</router-link>
    </div>
  </div>

  <div class="page">
    <router-view />
  </div>
</template>

<style>
  html, body {
    margin: 0;
    background-color: antiquewhite;
    font-family: "Manrope"
  }
  h1 {
    font-family: monospace;
  }

  .navbar {
    display: grid;
    background-color: sandybrown;
    padding: 20px;
  }
  .navbutton {
    margin: 5px;
    padding: 3px 5px;
    background-color: lightcoral;
    border-radius: 5px;
    text-decoration: none;
    color: black;
  }

  .page {
    padding: 20px;
  }
</style>