<template>
  <main class="main-container">
    <NavBar />
    <WeatherAPI />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import WeatherAPI from "./components/WeatherAPI.vue";
export default {
  components: {
    NavBar,
    WeatherAPI,
  }
}
</script>