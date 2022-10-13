$(function(){

    $('.header__burger, .menu__list a').click(function(event){
        $('.header__burger,.menu__list').toggleClass('active');
    });
    
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 200) {
            $('.wrapper').addClass('sticky'),
            $('.menu').addClass('stick')
        } else {
            $('.wrapper').removeClass('sticky'),
            $('.menu').removeClass('stick')
        }
    });

    $(".header,.footer").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;

        if (id === '#portfolio') {
            top = top - 130;
        }

        else if (id === '#contact') {
            top = top - 100;
        }

        else if (id === '#about', '#skills', '#services', '#reviews', '#contact') {
            top = top - 50;
        }
            
		$('body,html').animate({scrollTop: top}, 1500);
	});


    var mixer = mixitup('.portfolio__content');
});