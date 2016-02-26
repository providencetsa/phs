
var app = angular.module('app', [], function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});
angular.module('app').controller("MainController", function(){
    var site = this;
    site.title = 'ImagineBernie';
    site.description = 'This website is everything about Drones. Made by Providence High School\'s Technology Student Association';
    site.email = 'akamath426@gmail.com';
    site.author = 'Andy Kamath'
    site.year = '2016'
    site.change = function()
    {
    	console.log('swag')
    }
});

angular.module('app').controller("PageController", function(){
    var site = this;
    title = document.title
    site.description = 'This website is dedicated to all things drones. Made for TSA competition as webmaster';
    site.email = 'akamath426@gmail.com';
});