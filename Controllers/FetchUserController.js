/**
 * Created by CHANDOOO!!!! on 8/17/2017.
 */
(function () {

    'use strict';
    angular.module('MyApp')
        .controller('UserDataController',UserData);

    UserData.$inject=['UserGetDataService'];

    function UserData(UserGetDataService){
        var userCntrl = this;
        userCntrl.name="Chandni Patel";


        //Get all user data by calling UserGetDatService service and display in the table.
        UserGetDataService.getUser().then(function (success) {
            userCntrl.users=success;
        },function (error) {
           console.log(error) ;
        });


        userCntrl.deleteRow=function(i){
            userCntrl.users.splice(i,1);
        };
    }

    /*angular.module('MyApp')
        .controller("tableController", ['$scope', function ($scope) {
            // delete function this remove the selected table row
            $scope.deleteRow= function (i) {
                $scope.users.splice(i, 1);
                //alert(i);

            };

        } ]);*/



})();