<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# MovieMate API

A NestJS application that consumes TMDB APIs, stores data in a database, and provides RESTful endpoints for movie exploration and user interaction.

## Features

- **Movie Browsing**: List, search, and filter movies with pagination
- **User Management**: Register, login, and manage user profiles
- **Movie Ratings**: Rate movies and leave comments
- **Watchlist & Favorites**: Add movies to watchlist or mark as favorites
- **Genre Filtering**: Filter movies by genre
- **Caching**: Redis-based caching to reduce database calls
- **API Security**: JWT-based authentication and authorization

## Tech Stack

- **Backend**: NestJS (TypeScript)
- **Database**: PostgreSQL with TypeORM
- **Caching**: Redis
- **Authentication**: JWT
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest (Unit and E2E testing)
- **Containerization**: Docker & Docker Compose

## API Documentation

The API documentation is available via Swagger UI when the application is running:

```
http://localhost:8080/api/docs
```

### Main Endpoints

#### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token

#### Users

- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PATCH /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

#### Movies

- `GET /api/movies` - Get all movies with pagination, filtering and search
- `GET /api/movies/:id` - Get movie by ID
- `POST /api/movies/:id/rate` - Rate a movie
- `POST /api/movies/:id/watchlist` - Add movie to watchlist
- `DELETE /api/movies/:id/watchlist` - Remove movie from watchlist
- `POST /api/movies/:id/favorite` - Add movie to favorites
- `DELETE /api/movies/:id/favorite` - Remove movie from favorites

#### Genres

- `GET /api/genres` - Get all genres

## Installation and Setup

### Prerequisites

- Docker and Docker Compose
- Node.js (for local development)

### Running with Docker

1. Clone the repository
2. Create a `.env` file based on the `.env.example`
3. Run the application:

```bash
docker-compose up
```

The application will be available at http://localhost:8080

### Local Development Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on the `.env.example`
4. Start the development server:

```bash
npm run start:dev
```

## Testing

Run the test suite:

```bash
# Unit tests
npm run test

# Test coverage
npm run test:cov
```

## Project Structure

```
src/
├── common/              # Shared utilities, guards, interceptors, filters
├── config/              # Configuration files (env, database)
├── database/            # Database configurations and migrations
├── modules/             # Main application modules
│   ├── users/           # User management
│   ├── auth/            # Authentication 
│   ├── movies/          # Movie functionality
│   └── tmdb/            # TMDB API integration
├── interceptors/        # Global interceptors
├── guards/              # Global guards
├── main.ts              # Entry point
└── app.module.ts        # Root module
```

## Data Synchronization

The application syncs data from TMDB using a scheduled task that:

1. Fetches new/updated movies from TMDB
2. Transforms the data to match our schema
3. Stores it in the PostgreSQL database
4. Updates existing records if needed

## Caching Strategy

To reduce database calls, the application implements:

- In-memory caching for frequently accessed data
- Redis caching for more complex queries
- Cache invalidation on data updates
- Configurable TTL for different types of data

## License

This project is licensed under the MIT License.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)
