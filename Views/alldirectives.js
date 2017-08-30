/**
 * Created by CHANDOOO!!!! on 8/29/2017.
 */
(function(){
    'use strict';

    angular.module('MyApp')
        .directive('headerSection',headerSection);

    function headerSection() {

        return{
            restrict:'E',
            templateUrl:'header_tmpl.html'
        }

    }

})();