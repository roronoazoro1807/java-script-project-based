# Currency Converter

A simple **Currency Converter** web application that fetches real-time exchange rates and allows users to convert between different currencies.

## Features
- Select currencies for conversion.
- Fetch live exchange rates using an API.
- Display results dynamically.
- User-friendly interface with country flags.

## Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Logic for fetching exchange rates and updating the UI.
- **API**: `https://latest.currency-api.pages.dev/v1/currencies`


## Setup Instructions
1. Clone or download the project.
2. Open `index.html` in a browser.
3. Ensure you have an active internet connection to fetch real-time exchange rates.

## How It Works
1. Enter the amount to convert.
2. Select the **From** and **To** currencies.
3. Click the **Get Exchange Rate** button.
4. The exchange rate and converted amount will be displayed.

## API Details
- The application fetches exchange rates from the [Currency API](https://latest.currency-api.pages.dev/).
- The request URL follows this pattern: 
  ```
  https://latest.currency-api.pages.dev/v1/currencies/{base_currency}.json
  ```
- The response includes exchange rates for various currencies.

