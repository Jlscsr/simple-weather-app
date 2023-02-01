<template>
    <section class="weather-api container p-3 mt-2" role="region">
        <div class="card bgAccent-1 borderAccent-2 p-2 pt-3">
            <div class="input-group mb-3">
                <input type="text" v-model="searchedCountry" class="form-control borderAccent-2 p-2"
                    placeholder="Country name" aria-label="Country name" aria-describedby="search-country">
                <button class="btn borderAccent-2 textAccent-3" type="button" id="button-addon2"
                    @click="fetchWeather(searchedCountry)" aria-label="Search for weather information">Search</button>
            </div>
            <div v-if="isSearched" class="card-body p-1 textAccent-3 text-center">
                <div class="card-title p-1">
                    <img v-if="weatherInfo.cloudIcon" class="mx-auto" :src="weatherInfo.cloudIcon" alt="Cloud icon"
                        aria-hidden="true">
                    <span class="fs-5">{{ weatherInfo.cloud }}</span>
                </div>

                <div class="container-fluid">
                    <p class="card-text m-0 fs-2" role="status">{{ weatherInfo.temperature }}&#176;C</p>
                    <p class="card-text fs-6 textAccent-4" role="status">{{ weatherInfo.countryName }}</p>
                </div>
                <div class="other-stats container my-5">
                    <div class="row">
                        <div class="col-sm">
                            <p class="card-text m-0 fs-5" role="status">Humidity</p>
                            <p class="card-text m-0 fs-6" role="status">{{ weatherInfo.humidity }}%</p>
                        </div>
                        <div class="col-sm">
                            <p class="card-text m-0 fs-5" role="status">Wind speed</p>
                            <p class="card-text m-0 fs-6" role="status">{{ weatherInfo.windSpeed }}km/h</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="card-body textAccent-3 text-center" role="status">
                <div class="card-title p-1">
                    <p class="card-text fs-4">Search for some weather info!☁️</p>
                </div>
            </div>
        </div>
    </section>

</template>

<script src="./script/WeatherAPI.js"></script>
<style lang="scss">
@import "./style/WeatherAPI.scss";
</style>