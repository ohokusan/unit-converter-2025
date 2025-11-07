const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const outputListEl = document.getElementById("output-list-el");
const measureUnitsArr = [
  {
    name: "Length",
    metricUnit: ["Meter", "m"],
    imperialUnit: ["Feet", "ft"],
    factor: 3.280839895, // 1m = 1*3.280... foot
  },
  {
    name: "Volume",
    metricUnit: ["Litres", "L"],
    imperialUnit: ["UK Gallons", "gal"],
    factor: 0.2199692483, // 1l = 1/4.54609.. gallons
  },
  {
    name: "Mass",
    metricUnit: ["Kilograms", "kg"],
    imperialUnit: ["Pounds", "lbs"],
    factor: 2.2046226218, // 1kg = 1*2.204.. pounds
  },
];
let defaultNumber = 1;
let number = defaultNumber;

inputEl.value = String(defaultNumber);
render(1);

inputEl.addEventListener("click", function () {
  inputEl.value = "";
});

inputEl.addEventListener("input", function () {
  render(Number(inputEl.value));
});

// convertBtn.addEventListener("click", function () {
//   if (inputEl.value === "") {
//     inputEl.value = defaultNumber;
//   } else {
//     number = inputEl.value;
//   }
//   console.log(number);
//   render(number);
// });

function render(number) {
  createElements(measureUnitsArr, number);
}

function createElements(array, number) {
  let elements = "";
  for (let i = 0; i < array.length; i++) {
    elements += `
    <article class="converter__item">
      <h2 class="converter__item-heading">
        ${array[i].name} (${array[i].metricUnit[0]}/${array[i].imperialUnit[0]})
      </h2>
      <p class="converter__item-result">
        ${number} ${array[i].metricUnit[1]} = ${(
      number * array[i].factor
    ).toFixed(3)} ${array[i].imperialUnit[1]} <br> ${number} ${
      array[i].imperialUnit[1]
    } = ${(number / array[i].factor).toFixed(3)} ${array[i].metricUnit[1]}
      </p>
    </article>
    `;
  }

  outputListEl.innerHTML = elements;
}
