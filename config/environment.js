/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'coffeecodephilly',
    environment: environment,
    baseURL: '/',
    api_host: null,
    contentSecurityPolicy: {
      'default-src': "http://localhost:3000 http://localhost:8000 http://localhost:4200 http://your-server-ip",
      'script-src': "'self' http://localhost:3000 http://localhost:8000 http://localhost:4200 http://your-server-ip",
      'font-src': "'self' http://localhost:3000 http://localhost:4200 http://localhost:8000 http://your-server-ip",
      'connect-src': "'self' http://localhost:3000 http://localhost:4200 http://localhost:8000 http://your-server-ip",
      'img-src': "* 'self' http://localhost:3000 http://localhost:4200 http://your-server-ip http://localhost:8000",
      'style-src': "'self' http://localhost:3000 http://localhost:4200 http://your-server-ip http://localhost:8000",
      'media-src': "'self' http://localhost:3000 http://localhost:4200 http://your-server-ip http://localhost:8000"
    },
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['simple-auth'] = {
    crossOriginWhitelist: ['http://localhost:3000/*', 'http://your-server-ip/*', 'http://localhost:8000/*'],
    authorizer: 'simple-auth-authorizer:devise'
  },

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: 'http://your-server-ip/users/sign_in'
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.api_host = 'http://localhost:3000'
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';
    ENV.api_host = 'http://localhost:3000'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.api_host = 'http://your-server-ip'

  }

  return ENV;
};
