module.exports = {
    Host: 'localhost',
    USER: 'root',
    PASSWORD: 'Lucky@0214#',
    DB: 'zerozilla',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    JWT_SECRET: "myapp-secret-key"
}