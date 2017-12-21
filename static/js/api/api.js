window.TripnScanApi = (function() {
  var AUTH_USER = 'jq_api';
  var AUTH_PASS = 'PHaucu7uspu';
  var API_URL = 'http://api.stg.tripnscan.com'

  // constructor
  function TripnScanApi() {}

  TripnScanApi.prototype.searchKeyword = function(keyword) {
    var url = API_URL + '/discover/keyword/en/' + keyword;
    var data = {}
    $.ajax({
      url: url,
      method: 'GET',
      async: false,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', AUTH_USER + ' ' + AUTH_PASS);
      },
      success: function(response) {
        data = response
      }
    });
    return data
  };

  return TripnScanApi;

})();