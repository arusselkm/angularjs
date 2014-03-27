var controllers = {};
controllers.EDSController = function ($scope, $location, $routeParams, EDSService, localStorageService ) {

    $scope.edsList = [];
    $scope.statusList = [];

    init();

    function init() {

        var _statusList = localStorageService.get('statuslist');
        if(_statusList == null){
            _statusList = EDSService.getStatusList();
            localStorageService.set('statuslist', _statusList);
        }
        $scope.statusList = _statusList;

        var _edsList = localStorageService.get('edslist');
        if(_edsList == null){
            _edsList = EDSService.getEDSList();
            localStorageService.set('edslist', _edsList);
        }
        $scope.edsList = _edsList;

        var empNo = $routeParams.empNo;
        if (empNo != '') {
            $scope.eds = getEDS(empNo);
        }
    }

    function getEDS(empNo){
        var eds = null;
        for(var i=0;i<$scope.edsList.length;i++){
            if($scope.edsList[i].empNo == empNo){
                eds = $scope.edsList[i];
            }
        }
        return eds;
    }

    $scope.statusCount = function(statusID){
        console.log(statusID);
        var count = 0;
        for(var i=0;i<$scope.edsList.length;i++){
            if($scope.edsList[i].statusID == statusID) {
                count++;

            }
        }
        return count;
    };

    $scope.showStatus = function(eds){
        $location.path('/'+ eds.empNo);
    };

    $scope.changeStatus = function(empNo, status){
        var eds = getEDS(empNo);

        eds.statusID = status.statusID;
        eds.statusName = status.statusName;
        localStorageService.set('edslist', $scope.edsList);
        $location.path('/');
    };

};
edsApp.controller(controllers);

