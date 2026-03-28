const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    
    // Load associations
    require('./config/associations');
    
    // Sync DB (in dev only)
    await sequelize.sync(); 

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
