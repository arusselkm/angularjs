edsApp.directive('summary',function(){

    return{
        restrict: 'ECA',
        scope:{
            myVar:'='
        },
        replace:true,
        require:'ngModel',
        template:'<ul><li></li></ul>',
        link: function($scope, elem, attr, ctrl) {
                console.log($scope.myVar);

        }
    };
});



