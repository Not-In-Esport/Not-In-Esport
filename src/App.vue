<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="title">
      <img src="@/assets/nie_logo.png" alt="nie_logo"/>
      <h1>Not In Esport</h1>
    </div>
    <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
      </path></defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
      </use></g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
      </use></g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff">
      </use></g>
    </svg>
  </header>
  <main class="main">
    <RouterView />
      <nav class="navbar">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/player">Player</RouterLink>
        <RouterLink to="/staff">Staff</RouterLink>
        <RouterLink to="/team">Team</RouterLink>
      </nav>
    </main>
</template>

<style scoped>
.title {
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

img {
  height: 5rem;
}

h1 {
  color: rgba(255, 255, 255, 0.9);
  font-size: 3rem;
  font-weight: 300;
  font-family: 'Alfa Slab One';
  text-align: center;
  animation: opacity-fluctuation 1s alternate infinite;
}

header {
  background-color: black;
}

.main {
  background-color: white;
  width: 100%;
  height: 100%;
}

.hero-waves {
  display: block;
  width: 100%;
  height: 60px;
  z-index: 5;
  position: relative;
}

.wave1 use {
  -webkit-animation: move-forever1 10s linear infinite;
  animation: move-forever1 10s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.wave2 use {
  -webkit-animation: move-forever2 8s linear infinite;
  animation: move-forever2 8s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.wave3 use {
  -webkit-animation: move-forever3 6s linear infinite;
  animation: move-forever3 6s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

@keyframes opacity-fluctuation {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
</style>
