//  BASE URL (Fawad Ahmed API used)
const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

//  Populate Currency Dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    //  Preselect USD → INR
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  //  Ensure Flags Update When Currency Changes
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

//  Fetch Exchange Rate and Update UI
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;

  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // Show loading message
  msg.innerText = "Getting exchange rate...";

  // Create the correct API URL format
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    let data = await response.json();

    // Based on the API structure from latest.currency-api.pages.dev
    // The data should look like: { date: "2023-06-09", usd: { inr: 82.5, ... } }

    const baseCurrency = fromCurr.value.toLowerCase();
    const targetCurrency = toCurr.value.toLowerCase();

    // Check if the base currency exists in the response
    if (!data[baseCurrency]) {
      msg.innerText = `Error: Currency '${fromCurr.value}' not found in API response!`;
      console.error("Base currency not found in response:", data);
      return;
    }

    // Check if the target currency exists in the rates
    if (data[baseCurrency][targetCurrency] === undefined) {
      msg.innerText = `Error: Exchange rate for '${toCurr.value}' not available!`;
      console.error("Target currency not found in rates:", data[baseCurrency]);
      return;
    }

    // Get the exchange rate
    let rate = data[baseCurrency][targetCurrency];

    // Calculate the final amount
    let finalAmount = amtVal * rate;

    // Display the result
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${
      toCurr.value
    }`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rate!";
    console.error("Fetch Error:", error);
  }
};

// Update Flag Based on Selected Currency
const updateFlag = (element) => {
  let currCode = element.value;

  //  Ensure the country code exists before updating the flag
  if (countryList[currCode]) {
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  }
};

//  Button Click Event: Convert Currency
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

//  Auto Update Exchange Rate and Flags on Page Load
window.addEventListener("load", () => {
  fromCurr.value = "USD";
  toCurr.value = "INR";

  updateFlag(fromCurr);
  updateFlag(toCurr);

  updateExchangeRate();
});
