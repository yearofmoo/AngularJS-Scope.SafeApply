# AngularJS - Scope.SafeApply

## About

...

## Installation

To get this amazing plugin to run on your AngularJS application, simple download the plugin via NPM or Source File.

Then include this in your AngularJS application.

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

## Blog Article

...
