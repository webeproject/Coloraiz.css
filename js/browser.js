$(document).ready(function () {
  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';
   // At least Safari 3+: "[object HTMLElementConstructor]"
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
   // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
   // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
   // Chrome 1+
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  var browser;

  if (isIE === true || isEdge === true ) {
    browser = 'Internet Explorer';
  }
  if (isChrome === true ) {
    browser = 'Google Chrome';
  }
  if (isSafari === true ) {
    browser = 'Safari';
  }
  if (isFirefox === true ) {
    browser = 'Mozilla Firefox';
  }

//  confirm('Warning! This website is not optimized for ' + browser + '\n For a better experience use another browser');

  //Explorer Dialog
  setTimeout(function () {
    if (isEdge === true || isIE === true ) {
      swal({
        title: "Warn",
        text: "This website is not optimized for" + " " + "<u>" + browser + "</u>" + " " + "to have a better experience use another browser" + " " + "\nclick out to dismiss",
        type: "warning",
        html: true,
        showCancelButton: true,
        confirmButtonColor: "rgba(248,38,0, 1)",
        confirmButtonText: "Mozilla Firefox",
        cancelButtonText: "Google Chrome",
        closeOnConfirm: false,
        closeOnCancel: false },
        function(isConfirm){
          if (isConfirm) {
            window.open('https://www.firefox.com');
          } else {
            window.open('https://www.google.it/chrome/browser/desktop/index.html');
          }
        });
      }
  }, 2000);
});
