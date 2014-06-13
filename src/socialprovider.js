

var YahooSocialProvider = function(dispatchEvent) {
  this.dispatchEvent = dispatchEvent;
};

YahooSocialProvider.prototype.login = function(loginOpts, continuation) {
  var username = '';
  var password = '';
  var consumerKey = '';
  var loginUrl = "https://login.yahoo.com/WSLogin/V1/get_auth_token?&login=" + username + 
    '&passwd=' + password + 
    '&oauth_consumer_key=' + consumerKey;
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    console.log(xhr.responseText);
  }
  xhr.open('GET', loginUrl, true);
  xhr.send();
  window.temp = xhr;
};
