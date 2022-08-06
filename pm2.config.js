module.exports = {
  apps: [{
    name: "doveuikit_and_utils",
    script: "./server",
    watch: ["server"],
    log_date_format: "YYYY-MM-DD HH:mm",
    env_production: {
       NODE_ENV: "production"
    },
    env_development: {
       NODE_ENV: "development"
    },
    autorestart: false,
    // max_restarts: 10,
    // restart_delay: 5000,
  }]
}
