const cryptoInput = document.getElementById("cryptoInput");
const getPriceBtn = document.getElementById("getPriceBtn");
const cryptoData = document.getElementById("cryptoData");

getPriceBtn.addEventListener("click", async () => {
  const cryptoName = cryptoInput.value.trim().toLowerCase();

  if (!cryptoName) {
    alert("Please enter a cryptocurrency name.");
    return;
  }

  try {
    // Fetch data from CoinGecko API
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${cryptoName}`
    );

    // Check if response is OK
    if (!response.ok) {
      throw new Error("Cryptocurrency not found or invalid name");
    }

    // Parse the JSON response
    const data = await response.json();

    // Display the fetched data
    cryptoData.innerHTML = `
      <h2>${data.name} (${data.symbol.toUpperCase()})</h2>
      <p>Price: $${data.market_data.current_price.usd}</p>
      <p>Market Cap: $${data.market_data.market_cap.usd}</p>
      <p>24h Change: ${data.market_data.price_change_percentage_24h.toFixed(
        2
      )}%</p>
    `;
  } catch (error) {
    // Handle errors (invalid coin name, network issues, etc.)
    cryptoData.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
