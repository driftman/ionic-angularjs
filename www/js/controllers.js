angular.module('starter.controllers', []).

controller('EmployeesController', function($scope, Employee){
  $scope.employees = Employee.all();
  console.log("Hello FROM Employees Controller " + $scope.employees);
  $scope.remove = function(employee)
  {
    console.log(employee);
    Employee.remove(employee);
    $scope.employees = Employee.all();
  };

}).
controller('EmployeeController', function($scope, $stateParams, Employee) {
  $scope.id = $stateParams.id;
  $scope.employee = Employee.get($scope.id);
}).
controller('HomeController', function($scope, Posts){
  $scope.posts = Posts.all();
});
