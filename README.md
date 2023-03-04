# Weather App

## Description

This is a simple weather application that I built to practice using APIs. It was created using Vue.js, Vite, Scss, Bootstrap and Axios, and provides current weather information for a location of your choice.

## Features

- Displays current weather information for a selected location, including temperature, humidity, and weather description
- Uses OpenWeatherMap API to fetch weather data

## Technologies Used

- Vue.js
- Vite
- Scss
- Bootstrap
- Axios

## Getting Started

1. Clone this repository

```bash
git clone https://github.com/Jlscsr/pondev-weather-api.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

## Obtaining an API Key from OpenWeatherMap
1. Go to the OpenWeatherMap website at https://openweathermap.org/
2. Click on the "Sign up" button and create an account.
3. After logging in, go to the API keys section and generate a new API Key.

## Using the API Key
1. In your project directory, find a file named `.env`
2. Open the `.env` file and add the following line, adding your API key in "VITE_WEATHER_API_KEY" variable with the API Key you obtained from OpenWeatherMap:

```
VITE_WEATHER_API_KEY=<your_api_key>
```

3. Save the `.env` file.

That's it! Your application should now be able to use the API Key from the `.env` file to make requests to the OpenWeatherMap API.

## Thank You

Thank you for taking an interest in my project! I hope you find it useful. If you have any questions or feedback, please feel free to reach out.
