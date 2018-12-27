module.exports = {
  apps : [{
    name: 'pm2-learn',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 2,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'razz',
      host : '192.168.88.12',
      ref  : 'origin/master',
      repo : 'https://github.com/razzkumar/pm2-test.git',
      path : '/var/www/http/pm2-test',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
