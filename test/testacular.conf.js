// Testacular configuration
// Generated on Wed Dec 05 2012 15:50:37 GMT-0500 (EST)


// base path, that will be used to resolve files and exclude
basePath = '../';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,

  './test/lib/angular/angular.js',

  './test/lib/chai.js',
  './test/lib/chai-expect.js',
  './test/lib/chai-should.js',
  './test/lib/angular/angular-mocks.js',

  './src/Scope.SafeApply.js',

  './test/spec/*.js'
];

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];

// web server port
port = 8000;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];

// If browser does not capture in given timeout [ms], kill it
captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
