//scroll animation jquery Plugin
+(function ($) {

    $.fn.scrollAnimation = function (setting) {
        //defaultsetting
        var defaultSetting = {
            className: 'active',
            offsetElement:this
        }
        $.extend(defaultSetting, setting);
        
        //variables declearation
        var $window =$(window),
            _this    =$(this);
        $window.scroll(addClass);
        
        //addclass function
        function addClass(){
            var scrollTopPosition = $window.scrollTop(),
                elementOffsetTop  = $(defaultSetting.offsetElement).offset().top;
                if(scrollTopPosition >= elementOffsetTop){
                    //console.log("if");
                    if(!_this.hasClass('active')){
                        console.log("added Class");
                        _this.addClass(defaultSetting.className);
                    }
                }
                //console.log("scrollTop="+scrollTopPosition+" elementOffsetTop ="+elementOffsetTop+ " this="+_this);
        }
    };

})(jQuery)

$('.cont-address .line').scrollAnimation({offsetElement:".map"});  // IT IS JUST LIKE WOW JS