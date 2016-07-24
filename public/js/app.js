var app = angular.module("DRMSWebApp", []);

app.controller("DRMSWebController", function($scope){
  $scope.title = "DRMS website Editor";
})
.controller("techSkillsController", function($scope, $http){

  $http.get("/api/techskills")
  .success(function(response){
    $scope.techskills = response;
  });

  $scope.add = function(tskill){

    $http.post('/api/techskills', tskill)
    .success(function(response){
      $scope.techskills = response;
    });
  };

  $scope.remove = function(index){
    $http.delete('/api/techskills/' + index)
    .success(function(response){
      $scope.techskills = response;
    });
  };

});