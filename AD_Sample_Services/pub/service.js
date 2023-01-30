app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://LAPTOP-1DCBCOLM:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "30-01-2023 11:11:21 IST";
}
this.getPackageInfo = function(){
 return{"packageName":"AD_Sample_Services","createdDate":"30-01-2023 11:10:33 IST","version":"1.0"};
}
});
