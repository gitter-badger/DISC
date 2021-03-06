(function(){

    "use strict";

    angular.module("disc.components.result-screen").config(config);

    config.$inject = ["$stateProvider"];

    function config($stateProvider){

        var resultScreenState = {
            templateUrl: "/src/js/components/result-screen/result-screen.template.html",
            controllerAs: "vc",
            controller: "ResultScreenController",
            bindToController: true,
            url: "/result"
        };

        $stateProvider.state("resultScreen", resultScreenState);

    }

})();