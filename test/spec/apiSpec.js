describe("Testing AngularJS Safe Apply", function() {

  beforeEach(module('Scope.safeApply'));

  it("should update after $safeApply is run", inject(function($rootScope, $compile) {
    var $scope  = $rootScope.$new();
    var html    = '<div>{{ hello }}</div>';
    var element = $compile(html)($scope);

    var value = 'world';
    $scope.hello = value;
    expect(element.attr('html')).not.to.equal(value);

    $scope.$safeApply();

    expect(element.html()).equal(value);

    $scope.$destroy();
  }));

  it("should update if scope is the only param", inject(function($rootScope, $compile) {
    var $scope  = $rootScope.$new();
    var html    = '<div>{{ hello }}</div>';
    var element = $compile(html)($scope);

    var value = 'world';
    expect(element.attr('html')).not.to.equal(value);

    $scope.$safeApply(function() {
      $scope.hello = value;
    });

    expect(element.html()).equal(value);

    $scope.$destroy();
  }));

  it("should update if scope is the only param", inject(function($rootScope, $compile) {
    var $scope  = $rootScope.$new();
    var html    = '<div>{{ hello }}</div>';
    var element = $compile(html)($scope);

    var value = 'world';
    expect(element.attr('html')).not.to.equal(value);

    $scope.hello = value;

    $scope.$safeApply($scope);

    expect(element.html()).equal(value);

    $scope.$destroy();
  }));

  it("should update when both params are given", inject(function($rootScope, $compile) {
    var $scope  = $rootScope.$new();
    var html    = '<div>{{ hello }}</div>';
    var element = $compile(html)($scope);

    var value = 'world';
    expect(element.attr('html')).not.to.equal(value);

    $scope.$safeApply($scope, function() {
      $scope.hello = value;
    });

    expect(element.html()).equal(value);

    $scope.$destroy();
  }));

  it("should update when the $rootScope is given", inject(function($rootScope, $compile) {
    var html    = '<div>{{ hello2 }}</div>';
    var element = $compile(html)($rootScope);

    var value = 'world';
    expect(element.attr('html')).not.to.equal(value);

    $rootScope.hello2 = value;
    $rootScope.$safeApply($rootScope);

    expect(element.html()).equal(value);
  }));

  it("should update when the $rootScope and a function are given", inject(function($rootScope, $compile) {
    var html    = '<div>{{ hello3 }}</div>';
    var element = $compile(html)($rootScope);

    var value = 'world';
    expect(element.attr('html')).not.to.equal(value);

    $rootScope.$safeApply($rootScope, function() {
      $rootScope.hello3 = value;
    });

    expect(element.html()).equal(value);
  }));

  it("should change the location route on $rootScope", inject(function($rootScope, $location) {
    var path = '/home';
    expect($location.path()).not.to.equal(path);
    $location.path(path);
    $rootScope.$safeApply();
    expect($location.path()).to.equal(path);
  }));

  it("should change the location route on $scope", inject(function($rootScope, $location) {
    var $scope = $rootScope.$new();
    var path = '/index';
    expect($location.path()).not.to.equal(path);
    $location.path(path);
    $scope.$safeApply();
    expect($location.path()).to.equal(path);
    $scope.$destroy();
  }));

});
