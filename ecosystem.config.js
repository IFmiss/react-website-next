module.exports = {
  apps: [
    {
      name: 'web-next',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: 'cluster',
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production',
        PORT: 1993
      },
    },
  ],
}
