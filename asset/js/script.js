$(document).ready(function(){  

    var 신생높이 =  $("#신생").outerHeight(true);
    var 창천높이 = (신생높이 + $("#창천").outerHeight(true));
    var 홍련높이 = (창천높이 + $("#홍련").outerHeight(true));
    // console.log(신생높이);
    //console.log(창천높이);
    console.log(홍련높이); //홍련높이 5450
        // 신생높이 = 1637
    $(window).scroll(function(){
        var scrollheight = $(window).scrollTop()
            console.log(scrollheight);
            if(신생높이 -1500 <= scrollheight){
                $(".신생1").addClass("ani");
                
                setTimeout(function(){
                    $(".신생2").addClass("ani");
                },1000);
            }
            if(창천높이 -1000 <= scrollheight){
                $(".창천1").addClass("ani");

                setTimeout(function(){
                    $(".창천2").addClass("ani");
                },1000);

                setTimeout(function(){
                    $(".창천3").addClass("ani");
                },2000);
            }
            if(홍련높이 -1000 <= scrollheight){
                $(".홍련1").addClass("ani");

                setTimeout(function(){
                    $(".홍련2").addClass("ani");
                },1000);           
            }

            
    })
   

});

