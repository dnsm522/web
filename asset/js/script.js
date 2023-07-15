$(document).ready(function(){  

    var 신생높이 =  $("#신생").outerHeight();
    console.log(신생높이);
        // 신생높이 = 1637
    $(window).scroll(function(){
        var scrollheight = $(window).scrollTop()
            console.log(scrollheight);
            if(신생높이 -200 <= scrollheight){
                $("#신생1").addClass("ani");
                $("#신생2").delay(1000).addClass("ani");
            }
        
    })

});