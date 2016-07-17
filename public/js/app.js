var app = angular.module("DRMSWebApp", []);

app.controller("DRMSWebController", function($scope){
  $scope.title = "DRMSWeb website";
})
.controller("techSkillsController", function($scope, $http){
  $http.get("/api/techskills")
  .success(function(response){
    $scope.techskills = response;
  });
});