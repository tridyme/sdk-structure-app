process.env.NODE_ENV = 'production';
require('./overrides/webpack-config');
require('../node_modules/react-scripts/scripts/build');
