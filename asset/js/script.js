$(document).ready(function(){  

    var 신생높이 =  $("#신생").outerHeight();
    var 창천높이 = 신생높이 + $("#창천").outerHeight();
    console.log(신생높이);
        // 신생높이 = 1637
    $(window).scroll(function(){
        var scrollheight = $(window).scrollTop()
            console.log(scrollheight);
            if(신생높이 -400 <= scrollheight){
                $(".신생1").addClass("ani");
                
                setTimeout(function(){
                    $(".신생2").addClass("ani");
                },1000);
            }
            if(창천높이 -400 <= scrollheight){
                $(".창천1").addClass("ani");

                setTimeout(function(){
                    $(".창천2").addClass("ani");
                },1000);

                setTimeout(function(){
                    $(".창천3").addClass("ani");
                },1000);
            }
            
            

    })
   

});

