(function($){
    $.fn.extend({ 
        //plugin name - jsticky
        jsticky: function(options) {
 
            //Settings list and the default values
            var defaults = {
                marginTop: 0
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                var o = options;
                 
                //Assign current element to variable, in this case is UL element
                var obj = $(this);   


	var offset = obj.offset();
	var topOffset = offset.top;
	var marginTop = obj.css("marginTop");
	var marginTopNum = parseInt(marginTop);
	
	var diff = topOffset - marginTopNum;
	

	var offset = obj.offset();
				var topOffset = offset.top;
				var leftOffset = offset.left;
				var marginTop = obj.css("marginTop");
				var marginLeft = obj.css("marginLeft");
	

				$(window).scroll(function() { 
					var WindowScrollTop = $(window).scrollTop();
					var scrollTop = WindowScrollTop + o.marginTop;
		
					if (scrollTop >= topOffset){

						$('body').addClass('fixed-active');

						obj.addClass('fixed').css({
							marginTop: o.marginTop,
							marginLeft: leftOffset,
							position: 'fixed'
						});
					}
		
					if (scrollTop < topOffset){
						$('body').removeClass('fixed-active');
						obj.removeClass('fixed').css({
							marginTop: marginTop,
							marginLeft: marginLeft,
							position: 'relative'
						});
					}
				});

                 
            });
        }
    });
})(jQuery);