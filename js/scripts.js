$(".abouthim").css('visibility', 'hidden')
$(".teampeople").hover(function(){
	$(this).find('.abouthim').css('visibility', 'visible')
	$(this).find('div.abouthim').css('background','rgba(255,255,255,0.5)')
}, function(){
	$(this).find('.abouthim').css('visibility', 'hidden')
	$(this).find('div.abouthim').css('background','rgba(255,255,255,0.5)')
})

$(".teampeople").click(function(){
	$(this).find('.abouthim').css('visibility', 'visible')
	$(this).find('div.abouthim').css('background','rgba(255,255,255,0.5)')
})

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

font = parseInt($("#h1").css('font-size'))
$("span").css('font-size', (font*1.5).toString()+'px')

$("button").hover(function(){
    $(this).animate({background: "#FFF", color: "#777"}, 1000)
})

var colorLooper = setInterval(function() {

textchange();

}, 3000);