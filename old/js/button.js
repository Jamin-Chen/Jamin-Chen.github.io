$(document).ready(function(){
    $("#arrow").mouseover(function(){
        $(this).css('border-right','9px solid #e21c21');
        $(this).css('border-bottom','9px solid #e21c21');
        $(this).css('margin-left', '-19px');
        $("#btn1").css('border-color', 'transparent transparent #e3e3e3 transparent');
    });
    $("#arrow").mouseout(function(){
        $(this).css('border-right','7px solid #e21c21');
        $(this).css('border-bottom','7px solid #e21c21');
        $(this).css('margin-left', '-17.5px');
        $("#btn1").css('border-color', 'transparent transparent white transparent');
    });
    $("#btn1").click(function(){
        /*
        $("#welcome").animate({
            height: '30%',
            paddingTop: '150px',
        });
        $("h1").animate({
            fontSize: '78px'
        }, {duration: 300, queue: false })
        $("h2").animate({
            fontSize: '24px'
        }, {duration: 300, queue: false })
        $("#welcome_icons").animate({
            marginTop: '-50px'
        })
        */
        $("#btn1").fadeOut(300);
        $('html, body').animate({scrollTop: $('#about').offset().top /*- .7 * $("#welcome").height()*/}, "slow");
    });
});
