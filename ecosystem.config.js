module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [

    // First application
    {
      name: 'google-translate-try',
      script: 'bin/www',
      instances: 0,
      exec_mode: 'cluster',
      env: {
        PORT: 3008,
        LOGLEVEL: 'info',
      },
      env_prd: {
        NODE_ENV: 'prd',
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    dev: {
      user: 'joe',
      host: '182.254.242.31',
      ref: 'origin/master',
      repo: 'https://github.com/choelea/google-translate-api-try.git',
      path: '/data/release/google-translate',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env prd',
    },
  },
}
