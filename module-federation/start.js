process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('./overrides/webpack-config');
require('../node_modules/react-scripts/scripts/start');
