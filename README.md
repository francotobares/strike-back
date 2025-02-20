# Vulnerability Management API

### Prerequisites
- Node.js
- PostgreSQL
- npm

### Quick Setup

1. Install dependencies:
```bash
npm install
```

2. Setup `.env` file:
```env
DB_NAME=your_database_name
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
PORT=3000
```

3. Create and seed database:
```bash
psql -U postgres
CREATE DATABASE your_database_name;
npm run seed
```

### Run Application
```bash
npm start    # Production
npm run dev  # Development with auto-reload
```

### Testing
```bash
npm test             # Run tests
npm run test:watch   # Watch mode
```