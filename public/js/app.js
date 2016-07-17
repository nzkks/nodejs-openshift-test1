var app = angular.module("DRMSWebApp", []);

app.controller("DRMSWebController", function($scope){
  $scope.title = "DRMSWeb website";
})
  .controller("technicalSkillsController", function($scope){    

    $scope.technicalSkills = technicalSkills;
  });