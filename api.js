//  fetches posts from JSONPlaceholder
function fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json());
}

// weather data
function fetchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = 'London';
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json());
}

// random dog image 
function fetchDogImage() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json());
}

//  posts
function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '<h2>Posts</h2>';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsDiv.appendChild(postElement);
    });
}

// weather
function displayWeather(weather) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>Weather in ${weather.name}</h2>
        <p>Temperature: ${(weather.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: ${weather.weather[0].description}</p>
    `;
}

//  dog image
function displayDogImage(dogImage) {
    const dogImageDiv = document.getElementById('dog-image');
    dogImageDiv.innerHTML = '<h2>Random Dog Image</h2>';
    const imgElement = document.createElement('img');
    imgElement.src = dogImage.message;
    imgElement.alt = 'Random Dog';
    dogImageDiv.appendChild(imgElement);
}

// Fetch and display data from APIs
Promise.all([fetchPosts(), fetchWeather(), fetchDogImage()])
    .then(([posts, weather, dogImage]) => {
        displayPosts(posts);
        displayWeather(weather);
        displayDogImage(dogImage);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
