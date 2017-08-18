/**
 * Created by CHANDOOO!!!! on 8/17/2017.
 */

(function () {

    'use strict';
    angular.module('MyApp')
        .controller('UserDataController',UserData);

    UserData.$inject=['$http'];

    function UserData($http){
        var userCntrl = this;
        userCntrl.name="Chandni Patel";
        userCntrl.users={};
        $http.get('../Controllers/usersData.json')
            .then(function (success) {
                return userCntrl.users = success.data;
            },function (error) {
               console.log(error);
            });
    }
})();