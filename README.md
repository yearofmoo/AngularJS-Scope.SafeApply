# AngularJS - Scope.SafeApply

## About

...

## Installation

To get this amazing plugin to run on your AngularJS application, simple download the plugin via NPM or Source File.

```bash
# install via NPM
npm install angularjs-scope.safeapply

# And now you can copy or source the file via
./node_modules/angularjs-scope.safeapply/src/Scope.SafeApply.js
```

Or you can just copy it directly form Github via:

https://raw.github.com/yearofmoo/AngularJS-Scope.SafeApply/master/src/Scope.SafeApply.js


Once sourced into your webpage, then include this in your AngularJS application as so:

```javascript
angular.module('YOUR_MODULE', ['Scope.SafeApply']);
```

As soon as the application is bootstrapped or set to a ng-app directive then the plugin can be used inside your scope variables.

## Usage

To use the plugin, simple apply all your changes like so:

```javascript
//use by itself
$scope.$safeApply();

//tell it which scope to update
$scope.$safeApply($scope);
$scope.$safeApply($anotherScope);

//pass in an update function that gets called when the digest is going on...
$scope.$safeApply(function() {

});

//pass in both a scope and a function
$scope.$safeApply($anotherScope,function() {

});

//call it on the rootScope
$rootScope.$safeApply();
$rootScope.$safeApply($rootScope);
$rootScope.$safeApply($scope);
$rootScope.$safeApply($scope, fn);
$rootScope.$safeApply(fn);
```

## Testing

Be sure to install testacular via NPM (NodeJS) with the following command:

`sudo npm install -g testacular`

Then run this command at the root of the repo to test:

`./test/run.sh`

The test output should look like so:

```bash
Chrome 24.0: Executed X of X SUCCESS (0.123 secs / 0.123 secs)
```

## Blog Article

...
The challenges regarding $scope and $apply in AngularJS are talked about in more detail here:

http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html#apply-digest-and-phase
