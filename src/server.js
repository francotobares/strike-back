const app = require('./app');
const { sequelize } = require('./db/connection');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 