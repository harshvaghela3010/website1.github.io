$(window).load(function() {
	// Animate loader off screen
	$(".se-pre-con").fadeOut("slow");;
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 150) {
        $(".bottom_header").addClass("fixed_header");
    } else {
        $(".bottom_header").removeClass("fixed_header");
	}
}); //missing );