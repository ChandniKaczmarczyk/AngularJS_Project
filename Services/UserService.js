/**
 * Created by CHANDOOO!!!! on 8/17/2017.
 */
(function(){
    'use strict';

    angular.module('MyApp')
        .service('UserGetDataService',UserGetData);

    UserGetData.$inject=['$q','$http'];

    function UserGetData($q,$http) {

        var self=this;
        
        self.getUser= getUser;
        self.getUserById=getUserById;

        // function to fetch all users
        function getUser(){
           return $http.get('../Controllers/usersData.json')
               .then(successFn,errorFn);
        }

        //function to fetch user by id
        function getUserById(id) {
            return $http.get('../Controllers/usersData.json/' +id)
                .then(successFn,errorFn);
        }

        //create private success and error function to use multiple times
        function successFn(response) {
            return response.data;
        }

        function errorFn(error) {
            return $q.reject(error);
        }
    }

})();