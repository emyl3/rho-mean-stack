angular.module('meanApp')
       .controller('PeopleController', PeopleController);

function PeopleController($http) {
  console.log('PeopleController loaded');
  var controller = this;
  controller.people = [];

  controller.listPeople = function (option) {
    if (option === 'hometown') {
      $http.get('/people/hometown').then(function (response) {
        console.log('response', response);
        controller.people = response.data;
      }, function (error) {

        console.log('error making request', error);
      });
    } else if (option === 'movie') {
      $http.get('/people/movie').then(function (response) {
        console.log('response', response);
        controller.people = response.data;
      }, function (error) {

        console.log('error making request', error);
      });
    } else {
      console.log('Listing people');
      $http.get('/people').then(function (response) {
        console.log('response', response);
        controller.people = response.data;
      }, function (error) {

        console.log('error making request', error);
      });
    }
  };

  controller.addPerson = function() {
    var data = { name: controller.name, hometown: controller.hometown, movie: controller.movie };

    $http.post('/people', data).then(function(response){
      console.log('response', response);
    });
  };
}
