(function ($, Drupal) {

    Drupal.behaviors.areau = {
        attach: function (context, settings) {
            // Get your Yeti started.

            $(document).ready(function () {
                console.log('ready');
                $('.menu-719').append("<img class='hamburger' src='sites/all/themes/areau/images/mobile.png' />");
                
                    var li1 = $('.menu-718');
                    var li2 = $('.menu-510');
                    var li3 = $('.menu-511');
                    var li5 = $('.menu-512');
                    var li6 = $('.menu-513');
                    var li7 = $('.menu-933');
                
                    $('.hamburger').on('click', function(){
                    if($(this).hasClass('open') == false)
                    {
                        $(this).addClass('open');
                        $(this).css({'opacity':0.6});
                        li1.slideDown('slow');
                        li2.slideDown('slow');
                        li3.slideDown('slow');
                        li5.slideDown('slow');
                        li6.slideDown('slow');
                        li7.slideDown('slow'); 
                    }
                    else if($(this).hasClass('open'))
                    {
                        $(this).removeClass('open');
                        li1.slideUp('slow');
                        li2.slideUp('slow');
                        li3.slideUp('slow');
                        li5.slideUp('slow');
                        li6.slideUp('slow');
                        li7.slideUp('slow');
                        $(this).css({'opacity':1}); 
                    }
                    
                });
                
                
                checkWidth();
                
                $(window).resize(checkWidth);
                
                function checkWidth(){
                var width = $(window).width();

                if (width <= 768) {
                    li1.hide();
                    li2.hide();
                    li3.hide();
                    li5.hide();
                    li6.hide();
                    li7.hide();
                    
                } else {
                    li1.show();
                    li2.show();
                    li3.show();
                    li5.show();
                    li6.show();
                    li7.show();
                    $('.hamburger').removeClass('open');
                    $('.hamburger').css({'opacity':1}); 
                }
                }
    
            });
        }
    };

})(jQuery, Drupal);
