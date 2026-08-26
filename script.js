// OpenWeatherMap API Configuration
const API_KEY = '97df12f65dfd72a5d70e9e411d8a1759'; // Get free key from https://openweathermap.org/api
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Get DOM elements
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const errorMessage = document.getElementById('errorMessage');

/**
 * Search for weather data by city name
 */
function searchWeather() {
    const city = cityInput.value.trim();

    // Validate input
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    if (API_KEY === 'YOUR_API_KEY_HERE') {
        showError('Please add your OpenWeatherMap API key in script.js');
        return;
    }

    // Fetch weather data
    fetchWeatherData(city);
}

/**
 * Handle Enter key press in input
 */
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchWeather();
    }
}

/**
 * Fetch weather data from API
 */
async function fetchWeatherData(city) {
    try {
        hideError();
        const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        
        console.log('Fetching weather for:', city);
        console.log('API URL:', url);
        
        const response = await fetch(url);

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
            const errorData = await response.json();
            console.log('API Error:', errorData);
            
            if (response.status === 404) {
                showError('City not found. Please try again.');
            } else if (response.status === 401) {
                showError('API Key Error: Invalid or expired. Check your API key.');
            } else {
                showError(`API Error (${response.status}): ${errorData.message || 'Failed to fetch weather data.'}`);
            }
            hideWeatherInfo();
            return;
        }

        const data = await response.json();
        console.log('Weather data received:', data);
        displayWeather(data);
    } catch (error) {
        console.error('Fetch error:', error);
        showError('Error fetching weather data: ' + error.message);
        hideWeatherInfo();
    }
}

/**
 * Display weather data on the page
 */
function displayWeather(data) {
    const { name, sys, main, weather, wind } = data;

    // Build HTML for weather display
    const weatherHTML = `
        <h2>${name}, ${sys.country}</h2>
        <div class="temp">${Math.round(main.temp)}°C</div>
        <div class="description">${weather[0].main}</div>
        
        <div class="details">
            <div class="detail-item">
                <p>Feels Like</p>
                <span>${Math.round(main.feels_like)}°C</span>
            </div>
            <div class="detail-item">
                <p>Humidity</p>
                <span>${main.humidity}%</span>
            </div>
            <div class="detail-item">
                <p>Pressure</p>
                <span>${main.pressure} hPa</span>
            </div>
            <div class="detail-item">
                <p>Wind Speed</p>
                <span>${wind.speed.toFixed(1)} m/s</span>
            </div>
        </div>
    `;

    weatherInfo.innerHTML = weatherHTML;
    showWeatherInfo();
    cityInput.value = ''; // Clear input
}

/**
 * Show weather information section
 */
function showWeatherInfo() {
    weatherInfo.classList.add('show');
}

/**
 * Hide weather information section
 */
function hideWeatherInfo() {
    weatherInfo.classList.remove('show');
}

/**
 * Show error message
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.classList.remove('show');
}
