<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';

const showAltNav = ref(false)
const menuSelected = ref(false)

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
      <nav :class="menuSelected ? 'menu-selected' : 'menu'" @click="menuSelected = !menuSelected">
        <div :class="menuSelected ? 'first-bar first-bar-selected' : 'first-bar'"></div>
        <div :class="menuSelected ? 'second-bar second-bar-selected' : 'second-bar'"></div>
        <div :class="menuSelected ? 'third-bar third-bar-selected' : 'third-bar'"></div>
      </nav>
      <nav class="menu-items">
        <img src="@/assets/home_logo.svg" alt="home_logo" :class="menuSelected ? 'menu-items-logo home-logo-selected' : 'menu-items-logo'"/>
        <img src="@/assets/about_logo.svg" alt="about_logo" :class="menuSelected ? 'menu-items-logo about-logo-selected' : 'menu-items-logo'"/>
        <img src="@/assets/contact_logo.svg" alt="contact_logo" :class="menuSelected ? 'menu-items-logo contact-logo-selected' : 'menu-items-logo'"/>
      </nav>
      <img src="@/assets/nie_logo.png" alt="nie_logo" class="nie-logo"/>
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
    <nav class="alt-nav-navbar">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/player">Player</RouterLink>
      <RouterLink to="/staff">Staff</RouterLink>
      <RouterLink to="/team">Team</RouterLink>
    </nav>
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
.menu-items {
  position: absolute;
  height: 7rem;
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.menu-items-logo {
  position: absolute;
  z-index: 20;
  height: 2rem;
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}
.about-logo-selected {
  opacity: 1;
  transform: translateX(-4rem)
}
.contact-logo-selected {
  height: 2.2rem;
  margin-top: 0.2rem;
  opacity: 1;
  transform: translateX(2rem)
}
.home-logo-selected {
  height: 2.4rem;
  margin-bottom: 0.25rem;
  opacity: 1;
  transform: translateX(-1rem)
}
.menu-selected {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
}
.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  cursor: pointer;
}
.first-bar, .second-bar, .third-bar {
  background-color: white;
  width: 2rem;
  height: 0.2rem;
  border-radius: 4px;
  opacity: 1;
  transition: transform .5s, opacity .5s;
}

.first-bar-selected {
  transform: translateY(0.6rem) translateX(-8rem) rotate(45deg);
}
.second-bar-selected {
  transform: translateX(-8rem);
  opacity: 0;
}
.third-bar-selected {
  transform: translateY(-0.6rem) translateX(-8rem) rotate(-45deg);
}
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
  transition: opacity 0.5s, transform 0.8s;
}
.show-alt-nav {
  opacity: 1;
  transform: translateY(0);
}
.navbar a {
  color: black;
}
.alt-nav-navbar a {
  color: white;
}
.alt-nav-navbar {
  display: flex;
  width: 100%;
  height: 100%;
  gap: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.socials {
  position: absolute;
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
.nie-logo {
  height: 5rem;
  z-index: 1;
}
h1 {
  color: rgba(255, 255, 255, 1);
  font-size: 3rem;
  font-weight: 300;
  font-family: 'Alfa Slab One';
  text-align: center;
  z-index: 1;
  letter-spacing: -1.5px;
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
  gap: 5%;
  flex-wrap: wrap;
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

@media screen and (min-width: 1600px) {
  .socials {
    margin: auto;
    margin-left: 85rem;
  }
  .menu {
    margin-right: 92rem;
  }
  .menu-selected {
    margin-right: 92rem;
  }
  .menu-items {
    margin-right: 92rem;
  }
}

@media screen and (max-width: 1600px) and (min-width: 1024px) {
  .socials {
    right: 3rem;
  }
  .menu {
    left: 5rem;
  }
  .menu-selected {
    left: 5rem;
  }
}

@media screen and (max-width: 1024px) and (min-width: 700px) {
  .title {
    padding-top: 1rem;
  }
  .nie-logo {
    display: none;
  }
  .socials {
    flex-direction: column;
    flex-wrap: wrap;
    right: 7rem;
    height: 4rem;
    top: 2rem;
  }
  .menu {
    left: 5rem;
  }
  .menu-selected {
    left: 5rem;
  }
  .logo {
    height: 1.25rem;
  }
  .first-bar, .second-bar, .third-bar {
    width: 1.5rem;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    font-size: 2rem;
  }
  .title {
    padding-top: 1rem;
    gap: 0;
  }
  .nie-logo {
    display: none;
  }
  .socials {
    margin: 0 auto;
    top: 3.8rem;
    gap: 0.5rem;
  }
  .menu {
    display: none;
  }
  .menu-selected {
    display: none;
  }
  .logo {
    height: 1rem;
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
</style>
