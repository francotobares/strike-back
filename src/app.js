const express = require('express');
const cors = require('cors');
const sequelize = require('./db/connection');
const userRoutes = require('./routes/userRoutes');
const vulnerabilityRoutes = require('./routes/vulnerabilityRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.get('/test', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.use('/users', userRoutes);
app.use('/vulnerabilities', vulnerabilityRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected and synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 