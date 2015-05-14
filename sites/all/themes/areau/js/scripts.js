(function ($, Drupal) {

    Drupal.behaviors.areau = {
        attach: function (context, settings) {
            // Get your Yeti started.

            $(document).ready(function () {
                console.log('ready');
                $('.menu-719').append("<img class='hamburger' src='sites/all/themes/areau/images/mobile.png' />");
                
                var li1 = $('.menu-718').hide();
                var li2 = $('.menu-510').hide();
                var li3 = $('.menu-511').hide();
                var li5 = $('.menu-512').hide();
                var li6 = $('.menu-513').hide();
                var li7 = $('.menu-514').hide();
                
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
                
                

            });
        }
    };

})(jQuery, Drupal);
