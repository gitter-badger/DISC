(function(){

    "use strict";

    angular.module("disc.components.home").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider){
        var homeState = {
            templateUrl: "/src/js/components/home/home.template.html",
            controller: "HomeController",
            url: "/"
        };

        $stateProvider.state("home", homeState);

    }

})();