//scroll animation jquery Plugin
+(function ($) {
    $.fn.scrollAnimation = function (setting) {
        //defaultsetting
        var defaultSetting = {
            className: 'active'
        }
        $.extend(defaultSetting, setting);

        try{
          //variables declearation
          console.log(this.selector);

          var $window =$(window),
              windowHeight = $window.height(),
              _this    =$(this),
              elementOffsetTop  = $(this.selector).offset().top,
              revelAnimationOffset = elementOffsetTop - ( windowHeight*3/4 );
              //console.log("windowHeight "+windowHeight+"  elementOffsetTop "+elementOffsetTop+ "  revelAnimationOffset "+revelAnimationOffset);
              $window.scroll(addClass);
              //addclass function
              function addClass(){
                var scrollTopPosition = $window.scrollTop();
                    //console.log(scrollTopPosition);
                    if(scrollTopPosition >= revelAnimationOffset){
                      if(!_this.hasClass('active')){
                          _this.addClass(defaultSetting.className);
                      }
                    }
              }
        }catch(e){
          console.warn( "No element found for " + this.selector );
        }
    };
})(jQuery);
