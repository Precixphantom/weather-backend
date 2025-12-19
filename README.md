# 🌤️ Weather Backend API

> A production-ready Node.js backend service providing real-time weather data through a clean RESTful API. Built as part of my journey to master backend development and API design patterns.

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)

## 📋 Overview

This project demonstrates my understanding of backend architecture, API integration, and RESTful design principles. It serves as a microservice that aggregates weather data from OpenWeatherMap's API and exposes it through a well-structured endpoint.

**Status:** ✅ Core functionality complete | 🚧 Actively improving

## 🎯 Learning Objectives

Through this project, I'm developing skills in:

- Building scalable backend services with Express.js
- Implementing proper error handling and validation
- Working with external APIs and managing API keys securely
- Following MVC architecture patterns
- Environment-based configuration management

## ✨ Features

- **Real-time Weather Data**: Fetch current weather information for any city worldwide
- **Clean API Design**: RESTful endpoints following industry best practices
- **Structured Response**: Returns temperature (°C), weather description, and humidity percentage
- **Error Handling**: Graceful error responses for invalid requests
- **Environment Security**: API keys protected using environment variables

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js & Express.js** | Backend framework |
| **Axios** | HTTP client for external API calls |
| **dotenv** | Environment variable management |
| **Nodemon** | Development auto-reload |
| **OpenWeatherMap API** | Weather data provider |

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn package manager
- OpenWeatherMap API key ([Sign up here](https://openweathermap.org/api))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Precixphantom/weather-backend.git
cd weather-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
WEATHER_API_KEY=your_openweathermap_api_key
PORT=3000
```

4. **Start the development server**

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📡 API Documentation

### Endpoint: Get Weather Data

Retrieve current weather information for a specified city.

**Request**

```http
GET /weather?city={city_name}
```

**Query Parameters**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `city` | string | Yes | Name of the city (e.g., "London", "New York") |

**Success Response (200 OK)**

```json
{
  "city": "London",
  "temperature": 15.5,
  "description": "partly cloudy",
  "humidity": 72
}
```

**Error Response (400/500)**

```json
{
  "error": "Failed to fetch weather data"
}
```

**Example Usage**

```bash
# Using cURL
curl "http://localhost:3000/weather?city=Lagos"

```

## 📁 Project Architecture

```
weather-backend/
├── controllers/          # Request handlers & business logic
│   └── weatherController.js
├── routes/              # API route definitions
│   └── weatherRoute.js
├── models/            # External API integration layer
│   └── weather.js
├── .env                 # Environment variables (not tracked)
├── .gitignore          
├── package.json
├── server.js            # Application entry point
└── README.md
```

**Architecture Pattern**: MVC (Model-View-Controller) adapted for API services

- **Routes**: Define API endpoints and map to controllers
- **Controllers**: Handle requests, orchestrate service calls
- **Services**: Encapsulate external API logic

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `WEATHER_API_KEY` | Your OpenWeatherMap API key | `abc123def456...` |
| `PORT` | Server port number | `3000` |

## 🎓 Key Learnings & Challenges

**What I Learned:**

- Implementing separation of concerns through proper code organization
- Handling asynchronous operations with async/await
- Securing sensitive data using environment variables
- Parsing and transforming third-party API responses

**Challenges Overcome:**

- Managing API rate limits and error states
- Structuring the codebase for scalability
- Implementing proper error handling across layers

## 🔄 Future Enhancements

- [ ] Add request validation middleware
- [ ] Implement response caching to reduce API calls
- [ ] Add support for multi-day forecasts
- [ ] Create comprehensive test suite (Jest/Mocha)
- [ ] Add rate limiting for production readiness
- [ ] Deploy to a cloud platform (Railway/Render/Heroku)
- [ ] Add logging middleware (Winston/Morgan)
- [ ] Implement API documentation with Swagger

## 🤝 Contributing

This is a learning project, but I'm open to feedback and suggestions! Feel free to:

- Open an issue for bugs or feature requests
- Submit a pull request with improvements
- Share advice on best practices

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 About Me

Building backend systems and learning in public. Currently seeking internship opportunities where I can contribute to real-world projects and continue growing as a developer.

**Connect with me:**

- GitHub: [@Precixphantom](https://github.com/Precixphantom)
- Looking for: Backend Development Internships

---

⭐ If you found this project helpful or interesting, consider giving it a star!

**Last Updated:** December 2024
