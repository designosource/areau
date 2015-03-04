$(document).ready(function() {

  //LOGO FADING
  var $window = $(window);
  var $logo = $('.intro_logo');
  $('#logo_large').css('opacity', 1);  
     
  
   

  window.setTimeout("fadeLogo();", 3000);     
    
  function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 768) {
            //if the window is greater than 440px wide then turn on jScrollPane..
            $logo.hover(  
               function(){  
                  $(this).find('#logo_large').stop().fadeTo(2000, 1);  
               },  
               function(){  
                  $(this).find('#logo_large').stop().fadeTo(2000, 0);  
               });
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);    
    
  // SMOOTH SCROLLING
  $('#scrollButton').click(function() {
    $('html, body').stop().animate({
      scrollTop: $('#scrollTarget').offset().top
    }, 1000);
    return false;
  });

  // FORM VALIDATION
  $('#mc-embedded-subscribe-form').submit(function(event) {
    var email = $('#mce-EMAIL');
    var error = $('#error');

    email.removeClass('hasError');
    error.text('').hide();

    if (validateEmail(email.val())) {
      return true;
    } else {
      email.addClass('hasError');
      error.text("Gelieve een geldig e-mailadres in te vullen.").fadeIn(600);
      return false;
    };
  });

  function validateEmail(email) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(email);
  };

});

function fadeLogo(){    
  $('#logo_large').stop().fadeTo(2000, 0);   
  }