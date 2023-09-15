// const API_KEY = "64b13c54a12f0ca876cf339f2d7f7134";
// const cityName = "Jakarta";

// function getWeatherDataNow() {
//   const weatherDay = fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
//   );

//   return weatherDay;
// }

// function getWeatherDataForecast() {
//   const weatherForecast = fetch(
//     `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
//   );

//   return weatherForecast;
// }

// Promise.all([getWeatherDataNow(), getWeatherDataForecast()])
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const API_KEY = "64b13c54a12f0ca876cf339f2d7f7134";
const cityName = "jakarta";

function getWeatherDataForecast() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((datas) => displayData(datas));
}

function displayData(datas) {
  let formattedWeather = `Weather Forecast:`;
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let i = 4;
  while (i < datas.list.length) {
    const [datePart] = datas.list[i].dt_txt.split(" ");

    const dateObject = new Date(datePart);

    const dayOfWeek = daysOfWeek[dateObject.getUTCDay()];

    const date = dateObject.getUTCDate();

    const month = months[dateObject.getUTCMonth()];

    const year = dateObject.getUTCFullYear();

    formattedWeather += `\n${dayOfWeek}, ${date} ${month} ${year}: ${datas.list[i].main.temp}°C`;
    i += 7;
  }
  console.log(formattedWeather);
}

getWeatherDataForecast();
