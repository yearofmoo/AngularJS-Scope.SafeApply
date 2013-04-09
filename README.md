# AngularJS - Scope.SafeApply

AngularJS **$scope.$apply()** **without** the **hassle** and **errors** :)

## About

AngularJS' core feature is the use of scopes, variables and bindings. The procedure of a value being updated on the code
level and echoing to the DOM or application revolves around having a digest run against the scope to see what has changed
and what is still the same. To run a digest, Angular issues a `$scope.$apply()` operation throughout it's application life-cycle
to ensure that changes are picked up. And 3rd party applications can also call `$scope.$apply()`. Digests are automatically
dispatched on major events within an AngularJS application (onClick, XHR events, route changes, template downloads, etc...).

However, sometimes Angular complains when a $scope.apply operation is called. And when you do call $scope.$apply() then it may
not update properly and you would almost all the time need to check to see if a phase is going on to avoid an exception being
thrown. Luckily, **Scope.SafeApply** does all the work for you and you can apply changes to the application scope whenever you wish
with this handy plugin.

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
angular.module('YOUR_MODULE', ['Scope.safeApply']);
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

You can run the tests for this plugin directly from the repository...

To get started, be sure to have testacular installed. Testacular can be installed via NPM (NodeJS) with the following command:

```bash
# this will install testacular as a global binary on your system
sudo npm install -g testacular
```

Then run this command at the root of the repo to test:

```bash
# this will spawn up testacular and run the test specs
./test/run.sh
```

Once run, the test output should look like so:

```bash
Chrome 24.0: Executed X of X SUCCESS (0.123 secs / 0.123 secs)
```

## Blog Article

The challenges regarding $scope and $apply in AngularJS are talked about in more detail here:

http://www.yearofmoo.com/2012/10/more-angularjs-magic-to-supercharge-your-webapp.html#apply-digest-and-phase
