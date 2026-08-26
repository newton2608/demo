# Weather App 🌤️

A simple, clean, and easy-to-understand weather application built with HTML, CSS, and JavaScript. Search for any city to see current weather conditions.

## Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature
- 💧 Show humidity, pressure, and wind speed
- 🎨 Beautiful gradient UI with responsive design
- ⚡ Real-time data from OpenWeatherMap API
- 📱 Works on desktop and mobile devices

## Project Structure

```
├── index.html      # HTML structure
├── style.css       # Styling and layout
├── script.js       # JavaScript logic
└── README.md       # Documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- Free OpenWeatherMap API key

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Get a free API key**
   - Visit [OpenWeatherMap API](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate a free API key (current weather data)

3. **Add your API key**
   - Open `script.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_KEY = 'your_actual_api_key_here';
   ```

4. **Open the app**
   - Double-click `index.html` or open it in your browser
   - Or use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with live-server)
     npx live-server
     ```
   - Navigate to `http://localhost:8000`

## How to Use

1. Enter a city name in the search bar
2. Click "Search" or press Enter
3. View current weather information including:
   - Temperature in Celsius
   - Weather description
   - Feels like temperature
   - Humidity percentage
   - Atmospheric pressure
   - Wind speed

## Code Explanation

### `index.html`
- Contains the main structure
- Search input and button
- Container for displaying weather data
- Links to CSS and JavaScript files

### `style.css`
- Gradient background (purple theme)
- Card-based layout
- Responsive grid for weather details
- Smooth transitions and hover effects

### `script.js`
- `searchWeather()`: Validates input and initiates search
- `fetchWeatherData()`: Calls the OpenWeatherMap API
- `displayWeather()`: Shows the weather data on page
- Error handling for invalid cities or API issues

## Example Usage

```javascript
// Search for London
// User types "London" in the search bar and clicks Search
// App displays:
// - Temperature: 15°C
// - Description: Cloudy
// - Humidity: 72%
// - Wind Speed: 3.5 m/s
```

## Deployed Demo

You can view a live demo at: [Your live URL here]

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling with gradients and flexbox
- **JavaScript (ES6)** - API integration and DOM manipulation
- **OpenWeatherMap API** - Real-time weather data

## API Reference

Using OpenWeatherMap's free tier:
- Current weather endpoint: `/data/2.5/weather`
- Units: Metric (Celsius)
- Response includes: temperature, humidity, pressure, wind speed

[View Full API Documentation](https://openweathermap.org/current)

## Troubleshooting

### "Please add your OpenWeatherMap API key"
- Solution: Add your API key to `script.js` line 3

### "City not found"
- Solution: Check spelling and try again (e.g., "New York" not "NY")

### CORS Errors
- The server must allow cross-origin requests (OpenWeatherMap API supports CORS)
- Use a local server instead of opening the file directly

## Future Enhancements

- Add 5-day forecast
- Toggle between Celsius and Fahrenheit
- Show weather icons
- Add geolocation support
- Save favorite cities
- Add hourly forecast

## License

This project is open source and available under the MIT License.

## Author

Created as a demo weather application for learning and portfolio purposes.

## Resources

- [OpenWeatherMap API Docs](https://openweathermap.org/api)
- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

⭐ If you find this useful, please star the repository!
