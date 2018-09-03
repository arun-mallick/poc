var factoryModule = angular.module('FactoryModule', []);

//define a factory using factory() function
factoryModule.factory('MyFactory', function () {

var serviceObj = {};
serviceObj.setData = function (data) {
    serviceObj.detailsData = data;
};

serviceObj.getData = function () {
    return serviceObj.detailsData;
};

return serviceObj;
});