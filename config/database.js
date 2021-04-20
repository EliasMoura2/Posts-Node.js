

module.exports = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'alkemyposts',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
  define: {
    timestamps: false
  },
  pool:{
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,

  // config seeds
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',

  // config migrations
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations'
}