<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

const showAltNav = ref(false)

const handleScroll = () => {
  showAltNav.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header>
    <div class="title">
      <img src="@/assets/nie_logo.png" alt="nie_logo" class="nie_logo"/>
      <h1>Not In Esport</h1>
      <nav class="socials">
        <a href="https://twitter.com/NotInEsport" class="logo" target="_blank">
          <img src="@/assets/twitter_logo.svg" alt="twitter_logo" class="logo"/>
        </a>
        <a href="https://discord.gg/JbG9wB8z8U" class="logo" target="_blank">
          <img src="@/assets/discord_logo.svg" alt="discord_logo" class="logo"/>
        </a>
        <a href="https://www.twitch.tv/notinesport" class="logo" target="_blank">
          <img src="@/assets/twitch_logo.svg" alt="twitch_logo" class="logo"/>
        </a>
        <a href="https://www.youtube.com/channel/UCzj2HTDd3AxOH8XNKOLCukw" class="logo" target="_blank">
          <img src="@/assets/youtube_logo.svg" alt="youtube_logo" class="logo"/>
        </a>
      </nav>
    </div>
    <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
        </path>
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)">
        </use>
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)">
        </use>
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="6" fill="#fff">
        </use>
      </g>
    </svg>
  </header>
  <header :class="showAltNav ? 'show-alt-nav alt-nav' : 'alt-nav'">
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
.alt-nav {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.95));
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.25rem;
  opacity: 0;
  transform: translateY(-100%);
  transition: opacity 0.5s, transform 0.5s;
}
.show-alt-nav {
  opacity: 1;
  transform: translateY(0);
}
a {
  color: black;
}
.socials {
  position: absolute;
  right: 3rem;
  display: flex;
  gap: 1rem;
}
.logo {
  height: 1.5rem;
  z-index: 1;
}
.title {
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.nie_logo {
  height: 5rem;
  z-index: 1;
}

h1 {
  color: rgba(255, 255, 255, 0.9);
  font-size: 3rem;
  font-weight: 300;
  font-family: 'Alfa Slab One';
  text-align: center;
  z-index: 1;
}

.main {
  background-color: white;
  width: 100%;
  height: 100%;
  padding-bottom: 200rem;
  z-index: 1;
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
</style>
