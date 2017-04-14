// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

$(document).ready(function(){

  //smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function(){
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top 
    }, 500, function () {
      window.location.hash = href;
    });
      return false;
  });

  // Stellar
  $.stellar();


});
