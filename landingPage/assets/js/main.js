$(document).ready(function() {

  //LOGO FADING
  var $window = $(window);
  var $logo_div = $('.intro_logo');
  var $logo = $('#logo_large'); 
  $logo.css('opacity', 0); 
  // tablet //
  var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());      
           
  function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 768) {
            
            
            if(isiPad)
            {
               /*$('#audio').css('display','none');
               $('#music_play').css('display','none');
               $logo.css('opacity', 1); */
               $('video').css('display','none');
               console.log("ipad here");
            }
            else
            {
                /*$('audio').css('display','block');
                $('#music_play').css('display','block');*/
               console.log("ipad not here");


                function fadeLogo(){   

                    $logo.delay(2000).fadeTo(2800, 1, function(){
                    $logo.delay(400).fadeTo(2800, 0);
                    });
                }  
                fadeLogo();
                setInterval(fadeLogo, 65000);
            }
            
            
        }
        if(windowsize < 768)
        {
            $('audio').css('display','none');
            $('#music_play').css('display','none');
            $logo.css('opacity', 1);
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);    
   
// tablet //
var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());  
/*  
if(jQuery.browser.mobile)
{
   console.log('You are using a mobile device!');
   $('audio').css('display','none');
   $('#music_play').css('display','none');
   $logo.css('opacity', 1); 
   $('video').css('display','none');    
}
else
{
   console.log('You are not using a mobile device!');
    /*$('audio').css('display','block');
            $('#music_play').css('display','block');*/
            /*
            
            function fadeLogo(){   
    
                $logo.delay(2000).fadeTo(2800, 1, function(){
                $logo.delay(400).fadeTo(2800, 0);
                });
            }  
            fadeLogo();
            setInterval(fadeLogo, 65000);
    $('video').css('display','block');
}    
 */

if (Modernizr.mq('only all and (max-width: 768px)')) { 
  $logo.css('opacity', 1); 
   $('video').css('display','none');  

}else{
  console.log('You are not using a mobile device!');
    /*$('audio').css('display','block');
            $('#music_play').css('display','block');*/
            
            
            function fadeLogo(){   
    
                $logo.delay(2000).fadeTo(2800, 1, function(){
                $logo.delay(400).fadeTo(2800, 0);
                });
            }  
            fadeLogo();
            setInterval(fadeLogo, 65000);
    $('video').css('display','block');
}

    
  // MUSIC PAUZE AND PLAY
  //$('#music_play').hide();
  $('#music_play').click(function(e) {
      if ($('#music')[0].paused == false) {
          $('#music')[0].pause();
          console.log('music paused');
          $('#handlers').attr('src','assets/images/playbtn.png');
      } else {
          $('#music')[0].play();
          console.log('music playing');
          $('#handlers').attr('src','assets/images/pauzebtn.png');
      }
      e.preventDefault();
    });
    
    
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

var logo = document.getElementById('logo_large');

