module.exports = {
  apps: [
    {
      name: 'web-next',
      script: 'server.js',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '200M',
      env: {
        NODE_ENV: 'development',
        PORT: 1993
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],
}
