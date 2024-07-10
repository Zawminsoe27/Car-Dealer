const make = document.querySelector("#make");
let models = [
  "audi",
  "bentley",
  "bmw",
  "ford",
  "benz",
  "nissan",
  "peugeot",
  "toyota",
  "honda",
  "volks",
];
models.forEach((model) => {
  const option = document.createElement("option");
  option.value = model;
  option.textContent = model.charAt(0).toUpperCase() + model.slice(1);
  make.appendChild(option);
});

let years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const yearElement = document.querySelector("#year");
years.forEach((year) => {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  yearElement.appendChild(option);
});
