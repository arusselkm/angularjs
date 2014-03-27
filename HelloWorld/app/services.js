edsApp.service('EDSService', function () {
    var service = {};
    var edsColl = [
        { empNo: 1, name: 'Priji', statusID: 1, statusName:'Unknown' },
        { empNo: 2, name: 'Tennyson', statusID: 1, statusName:'Unknown' },
        { empNo: 3, name: 'Anvar', statusID: 2, statusName:'Present' },
        { empNo: 4, name: 'Michael', statusID: 1, statusName:'Unknown' },
        { empNo: 5, name: 'Hafeez', statusID: 1, statusName:'Unknown' }
    ];
    var statusColl = [
        {statusID:1, statusName:'Unknown'},
        {statusID:2, statusName:'Present'},
        {statusID:3, statusName:'Absent'},
        {statusID:4, statusName:'Leave'}
    ];
    this.getStatusList = function(){
        return statusColl;
    };
    this.getEDSList = function () {
        return edsColl;
    };

});
