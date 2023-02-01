import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const API_KEY = "050ee986e0cb4cd0a074922ad3176902";
    let searchedCountry = ref(null);
    let isSearched = ref(false);
    let weatherInfo = ref({
      countryName: null,
      cloud: null,
      temperature: null,
      humidity: null,
      windSpeed: null,
    });

    /**
     * fetchWeather
     *
     * A function that fetches the weather information of a given country.
     *
     * @param {String} country - The name of the country to fetch weather information for.
     *
     * @return {Object} - An object containing weather information for the given country.
     */
    const fetchWeather = async (country) => {
      isSearched.value = true;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`;

      try {
        const response = await axios.get(url);
        displayInfo(response.data);
        searchedCountry.value = null;
      } catch (error) {
        alert(
          "Error: The country could not be found. Please check the spelling and try again."
        );
      }
    };

    /**
     * displayInfo
     *
     * A function that displays the weather information of a given country.
     *
     * @param {Object} data - The data object containing the weather information.
     *
     * @return {Object} - An object containing the displayed weather information.
     */
    const displayInfo = (data) => {
      let { name } = data;
      let { description, icon } = data.weather[0];
      let { humidity, temp } = data.main;
      let { speed } = data.wind;

      let temperature = (temp - 273.15).toFixed(2);

      return (weatherInfo.value = {
        countryName: name,
        cloud: description.charAt(0).toUpperCase() + description.slice(1),
        cloudIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
        temperature,
        humidity,
        windSpeed: speed,
      });
    };

    return { searchedCountry, isSearched, weatherInfo, fetchWeather };
  },
};
