Package.describe({
  name: 'schaazzz:charts',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'For testing/personal use! Not tested yet!',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3');
  api.use('ecmascript');
  api.addFiles('charts.js','client');
  api.mainModule('charts.js','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('schaazzz:charts');
  api.mainModule('charts-tests.js');
});
