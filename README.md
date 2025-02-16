# Vulnerability Management API

A RESTful API for managing security vulnerabilities with state management and soft delete functionality.

## Setup

### Prerequisites
- Node.js
- PostgreSQL
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install express sequelize pg pg-hstore cors swagger-ui-express swagger-jsdoc dotenv
npm install --save-dev nodemon
```

3. Create a `.env` file in the root directory:
```env
DB_NAME=your_database_name
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

4. Create the database:
```bash
psql -U postgres
CREATE DATABASE your_database_name;
```

### Running the Application

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Documentation

Access Swagger documentation at:
```
http://localhost:3000/api-docs
```

## API Endpoints

### Vulnerabilities

#### Get All Vulnerabilities
```bash
GET http://localhost:3000/vulnerabilities
```

#### Get Single Vulnerability
```bash
GET http://localhost:3000/vulnerabilities/:id
```

#### Create Vulnerability
```bash
POST http://localhost:3000/vulnerabilities
Content-Type: application/json

{
  "title": "SQL Injection",
  "description": "SQL injection vulnerability in login form",
  "severity": "High",
  "cwe": "CWE-89",
  "affectedComponent": "Login API",
  "reporter": "Security Team",
  "status": "Open"
}
```

#### Change Vulnerability State
```bash
PUT http://localhost:3000/vulnerabilities/:id/state
Content-Type: application/json

{
  "state": "In Progress"
}
```

Valid states:
- Open
- In Progress
- Fixed
- Won't Fix
- Closed

#### Soft Delete Vulnerability
```bash
DELETE http://localhost:3000/vulnerabilities/:id
```

#### Get Deleted Vulnerabilities
```bash
GET http://localhost:3000/vulnerabilities?includeDeleted=true
```

#### Restore Deleted Vulnerability
```bash
POST http://localhost:3000/vulnerabilities/:id/restore
```

## Database Commands

### PostgreSQL

Connect to PostgreSQL:
```bash
psql -U postgres
```

List databases:
```bash
\l
```

Connect to your database:
```bash
\c your_database_name
```

List tables:
```bash
\dt
```

### Sequelize Commands

Run migrations:
```bash
npx sequelize-cli db:migrate
```

Undo last migration:
```bash
npx sequelize-cli db:migrate:undo
```

## State Transitions

Valid state transitions:
- From 'Open': Can move to 'In Progress', 'Won't Fix', 'Fixed'
- From 'In Progress': Can move to 'Fixed', 'Won't Fix', 'Open'
- From 'Fixed': Can move to 'Closed', 'Open'
- From 'Won't Fix': Can move to 'Closed', 'Open'
- From 'Closed': Can only move to 'Open'

## Development

### Install Development Dependencies
```bash
npm install --save-dev nodemon
```

### Run Tests
```bash
npm test
```

### Lint Code
```bash
npm run lint
```

## Project Structure
```
src/
├── app.js              # Application entry point
├── config/             # Configuration files
├── models/             # Database models
├── routes/             # Route definitions
├── services/           # Business logic
└── db/                 # Database setup and migrations
```

## Dependencies

Main dependencies:
- express
- sequelize
- pg (PostgreSQL client)
- cors
- swagger-ui-express
- swagger-jsdoc
- dotenv

Dev dependencies:
- nodemon

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request