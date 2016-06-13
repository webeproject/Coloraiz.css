$(document).ready(function () {
    var lang = navigator.language || navigator.userLanguage;

    $('footer').addClass('cz-lgray-10');

    console.log("Document Ready");
    $('body').click(function () {
      console.log('removing classes');
      $('body').removeAttr('class');
      $('main').removeAttr('class');
      $('a').removeAttr('class');
      $('footer').removeAttr('class');
      $('footer').addClass('cz-lgray-10');
    });

    $('#blue_sel').tooltip({title: "cz-blue-7", trigger: "hover", placement: "right"});
    $('#purple_sel').tooltip({title: "cz-purple-7", trigger: "hover", placement: "right"});
    $('#red_sel').tooltip({title: "cz-lred-7", trigger: "hover", placement: "right"});
    $('#orange_sel').tooltip({title: "cz-orange-7", trigger: "hover", placement: "right"});
    $('#green_sel').tooltip({title: "cz-green-7", trigger: "hover", placement: "right"});
    $('#marine_sel').tooltip({title: "cz-marine-7", trigger: "hover", placement: "right"});
    $('#azure_sel').tooltip({title: "cz-azure-7", trigger: "hover", placement: "right"});
    $('#lgray_sel').tooltip({title: "cz-lgray-7", trigger: "hover", placement: "right"});
    $('#gray_sel').tooltip({title: "cz-gray-7", trigger: "hover", placement: "right"});


  $('a').click(function(){
    $('html, body, main, footer, header').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 300); //Here the ms
    return false;
  });
});

//  window.open('http://www.paypal.me/webeproject/' + don);

function moredon() {
  var don = prompt('I promise you will not regret', 'Insert here the value');
  window.open('http://www.paypal.me/webeproject/' + don);
}
