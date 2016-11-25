(function($){
    
    $.fn.carousel = function(options){

        var options = $.extend({
			speed: 400
		}, options);
        
        var w = $('#slider_container').width();
        $('.slides>li').width( w );
        $('.slides').width( w * $('.slides>li').length );
        $('.slides').css( 'left', -w );
        $('.slides>li:last-child').prependTo('.slides');
        
        function next(){
            $('.slides').animate({
                'margin-left': -w
            }, options.speed, function(){
                $('.slides>li:first-child').appendTo( '.slides' )
                $('.slides').css( 'margin-left', 0 )
            }) 
        }

        $('#nextSlide').click( next );
        
        function prev(){
            $('.slides').animate({
                'margin-left': w
            }, options.speed, function(){
                $('.slides>li:last-child').prependTo( '.slides' )
                $('.slides').css( 'margin-left', 0 )
            }) 
        }

        $('#prevSlide').click( prev );
    }
    
}(jQuery))