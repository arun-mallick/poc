var controllerModule = angular.module("ControllerModule", []);
controllerModule.controller("HomeController",function($scope,$rootScope,MyFactory,$location){
  $scope.base64 = function(url,index){
        function toDataURL(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
              var reader = new FileReader();
              reader.onloadend = function() {
                callback(reader.result);
              }
              reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
          }

          toDataURL(url, function(dataUrl) {
            console.log('RESULT:')
            $scope.imageUrl = dataUrl;
          })
  };


  
    $scope.obj = {
    "title":"Angular JS Exercise",
    "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "rows":[{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    },{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    },{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    },{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    },{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    },{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    },{
      "category":"Companies",
      "title":"Google",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "url":"https://www.google.com",
      "imageHref":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarUnNNDgYLrZFxsEpgVnnXwzI3J5ffDHrSqql_TUHwxVdvAyj"
    }
  ]
};
$rootScope.title = $scope.obj.title;

$scope.navToDetails = function(data){
    MyFactory.setData(data);
    $location.path("/details");
};

})  

controllerModule.controller("DetailsController",function($scope,$rootScope,MyFactory,$location){
    
  $scope.data = MyFactory.getData();
  MyFactory.setData({});
  back = function(){
    $location.path('/');
  };

  })  
