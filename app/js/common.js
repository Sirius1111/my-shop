$('document').ready(function () {

	// wow

    var wow = new WOW();
	wow.init();
    // search
    let search = $('#search')
    let searchInput = $('.search__input')
    let quickLinks = $('.quick-links')
    $(search).on('click', () => {
        if($(search).hasClass('active')){
            $(search).toggleClass('active')
            $(searchInput).fadeOut()
            setTimeout(() => {
                $(searchInput).toggleClass('active')  
                setTimeout(() => {
                    $(quickLinks).fadeIn(300)                    
                }, 200);
            }, 300);
        } else {
            $(search).toggleClass('active')
                $(quickLinks).fadeOut(300);
            setTimeout(() => {
                $(searchInput).fadeIn().toggleClass('active')
            }, 300);
        }
        $(search).css('pointerEvents', 'none');
        setTimeout(() => {
            $(search).css('pointerEvents', 'auto');            
        }, 1000);
    })
    // scrool;
    const elementHeight = $('#header_nav').innerHeight()
    const containerHeight = $('#header__quick_links').innerHeight()
    $(window).scroll(() =>{
    const scroll = $(this).scrollTop()
        if(scroll>containerHeight){
            $('#header_nav').addClass('fixed')
            $('#header_nav .nav__cart').removeClass('bounceOut').addClass('bounceIn').css({
                opacity: 1,
            })
            $('#main__banner').css({
                marginTop: elementHeight,
            })
        }
        else{
            $('#header_nav').removeClass('fixed')
            if($('#header_nav .nav__cart').hasClass('bounceIn')){
                $('#header_nav .nav__cart').removeClass('bounceIn').addClass('bounceOut')                
            }
            $('#main__banner').css({
                marginTop: 0,
            })
        }
    });
    // menu
    let toggle = $('#toggle')
    let navs = $('.menu .nav li')
    $(toggle).on('click', () => {
        $(toggle).toggleClass('active')
        if($(navs[0]).hasClass('bounceIn')){
            $(navs).addClass('bounceOut').removeClass('bounceIn')
            setTimeout(() => {
                $('.menu .nav').slideToggle();       
            }, 500)
            
        } else {
            $(navs).removeClass('bounceOut')
            setTimeout(() => {
                for (let i = 0; i < navs.length; i++) {
                    setTimeout(() => {
                        $(navs[i]).toggleClass('bounceIn')
                    }, 100 * i);
                }   
            }, 500);
            $('.menu .nav').slideToggle();       
        }
        $(toggle).css('pointerEvents', 'none');
        setTimeout(() => {
            $(toggle).css('pointerEvents', 'auto');            
        }, 1200);
    })

})