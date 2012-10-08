angular.module('Scope.safeApply', []).run(function($rootScope) {

  $rootScope.$safeApply = function($scope, fn, force) {
    $scope = $scope || $rootScope;
    fn = fn || function() {};
    if(force || !$scope.$$phase) {
      $scope.apply(fn);
    }
    else {
      fn();
    }
  };

});
