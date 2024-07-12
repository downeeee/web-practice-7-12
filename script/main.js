$(function(){//메뉴 슬라이드이미지 팝업 tab
    
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown()
    }, function(){
        $(".sub").stop().slideUp()
    })//hover

    var n=0; //0: top =0     1: top= -300       2: top= -600

    setInterval(function(){
        if(n == 2){
            n=0

        }else{
            n++
        }//if
        console.log(n);

        $(".top_move").animate({top :n * (-300) + "px"},500)
    },2000)//


    $(".cont1 h2").click(function(){
        $(".container .cont1 h2").addClass("on")
        $(this).removeClass("on");

        $(".cont1 ul").hide()
        $(this).next().css({display : "flex"})
    })//click



    $(".no_pop").click(function(){
        $(".pop").show()
    })

    $(".close").click(function(){
        $(".pop").hide()
    })

})//js end  