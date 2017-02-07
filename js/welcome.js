$(document).ready(function(){
    $("#big_name").mouseover(function(){
        $(this).css('font-size', '150%');
        $(this).css('color', '#FF6600');
        $("#welcome_icons").stop().fadeOut(300);
        $("h2:not(#learn_more)").stop().animate({opacity:0}, {duration: 300});
        $("#learn_more").stop().animate({opacity:1}, {duration: 2000, queue: true});
    });
    $("#big_name").mouseout(function(){
        $(this).css('font-size', '100%');
        $(this).css('color','white');
        $("#welcome_icons").stop().fadeIn(300);
        $("h2:not(#learn_more)").stop().animate({opacity:1}, {duration: 300});
        $("#learn_more").stop().animate({opacity:0}, {duration: 300, queue: false  });
    });
    // mouse over github icon
    $("#welcome_icons ul li:nth-child(1) a").mouseover(function(){
        $("#welcome")
            .css('background-image', 'url('+'./images/background_github.png'+')');
        $("#adj1").css('color', '#6e5494');
        $("#adj1").css('font-size','150%');
    })
    // mouse over linkedin icon
    $("#welcome_icons ul li:nth-child(2) a").mouseover(function(){
        $("#welcome")
            .css('background-image', 'url('+'./images/background_linkedin.png'+')');
        $("#adj2").css('color', '#0077B5');
        $("#adj2").css('font-size','150%');
    })
    // mouse over email icon
    $("#welcome_icons ul li:nth-child(3) a").mouseover(function(){
        $("#welcome")
            .css('background-image', 'url('+'./images/background_email.png'+')');
        $("#adj3").css('color', '#fffc00');
        $("#adj3").css('font-size','150%');
    })
    $('#welcome_icons').mouseout(function(){
        $('#welcome').css(
            'background-image', 'url('+'./images/header_background.jpg'+')'
        );
        $(".adj").css('color', '#ffffff');
        $(".adj").css('font-size','100%');
    })
});
