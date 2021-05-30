$(function(){

  $(".nav > ul li").mouseenter(function(){
    $(this).find("div").addClass("on");
  });
  $(".nav > ul li").mouseleave(function(){
    $(this).find("div").removeClass("on");
  });

  $(".menu1Btn").mouseenter(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".menu1Btn img").attr("src");
    $(".menu1Btn img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".menu1Btn").mouseleave(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".menu1Btn img").attr("src");
    $(".menu1Btn img").attr({"src":srcVal.replace("2.png","1.png")});
  });

  $(".menu2Btn").mouseenter(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".menu2Btn img").attr("src");
    $(".menu2Btn img").attr({"src":srcVal.replace("3.png","4.png")});
  });
  $(".menu2Btn").mouseleave(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".menu2Btn img").attr("src");
    $(".menu2Btn img").attr({"src":srcVal.replace("4.png","3.png")});
  });

  $(".cheezemenu1Btn").mouseenter(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu1Btn img").attr("src");
    $(".cheezemenu1Btn img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".cheezemenu1Btn").mouseleave(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu1Btn img").attr("src");
    $(".cheezemenu1Btn img").attr({"src":srcVal.replace("2.png","1.png")});
  });

  $(".cheezemenu2Btn").mouseenter(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu2Btn img").attr("src");
    $(".cheezemenu2Btn img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".cheezemenu2Btn").mouseleave(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu2Btn img").attr("src");
    $(".cheezemenu2Btn img").attr({"src":srcVal.replace("2.png","1.png")});
  });

  $(".cheezemenu3Btn").mouseenter(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu3Btn img").attr("src");
    $(".cheezemenu3Btn img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".cheezemenu3Btn").mouseleave(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu3Btn img").attr("src");
    $(".cheezemenu3Btn img").attr({"src":srcVal.replace("2.png","1.png")});
  });

  $(".cheezemenu4Btn").mouseenter(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu4Btn img").attr("src");
    $(".cheezemenu4Btn img").attr({"src":srcVal.replace("1.png","2.png")});
  });
  $(".cheezemenu4Btn").mouseleave(function(){
    // $(".menu1Btn").attr({});
    var srcVal = $(".cheezemenu4Btn img").attr("src");
    $(".cheezemenu4Btn img").attr({"src":srcVal.replace("2.png","1.png")});
  });
  $(".menu1Btn").click(function(){
    $("#main").hide();
    $("#main3").show();
    $(".menu1").hide();
    $(".menu2").hide();
    $(".menu3").hide();
    $(".menu4").hide();
  });
  $(".cheezeC").click(function(){
    $("#main3").hide();
    $("#main2").show();
  });

  $(".menu2Btn").click(function(){
    $("#main").hide();
    $("#main2").show();

  });
  $(".storyC").click(function(){
    $("#main2").hide();
    $("#main3").show();
    $(".menu1").hide();
    $(".menu2").hide();
    $(".menu3").hide();
    $(".menu4").hide();
  });

  $(".cheezemenu1Btn").click(function(){
    $("#main2").hide();
    $(".menu1").show();
  });
  $(".cheezemenu2Btn").click(function(){
    $("#main2").hide();
    $(".menu2").show();
  });
  $(".cheezemenu3Btn").click(function(){
    $("#main2").hide();
    $(".menu3").show();
  });
  $(".cheezemenu4Btn").click(function(){
    $("#main2").hide();
    $(".menu4").show();
  });

  // let number = 0;

  $(".RBtn").click(function(){
    $(".slidelist1").animate({left:-100+"%"},1000,function(){
      $(".slidelist1 div:first-child").appendTo(".slidelist1");//1번 사진을 3번 뒤로 붙이기
      $(".slidelist1").css('left','0');
      // number++;
      // if(number>3){
      //   number=0;
      // }
      // tabBtn(number);
    });
    // $(".slidelist2").animate({left:-100+"%"},1000,function(){
    //   $(".slidelist2 div:first-child").appendTo(".slidelist2");//1번 사진을 3번 뒤로 붙이기
    //   $(".slidelist2").css('left','0');
    // });
    // $(".slidelist3").animate({left:-100+"%"},1000,function(){
    //   $(".slidelist3 div:first-child").appendTo(".slidelist3");//1번 사진을 3번 뒤로 붙이기
    //   $(".slidelist3").css('left','0');
    // });
    // $(".slidelist4").animate({left:-100+"%"},1000,function(){
    //   $(".slidelist4 div:first-child").appendTo(".slidelist4");//1번 사진을 3번 뒤로 붙이기
    //   $(".slidelist4").css('left','0');
    // });
  });
  $(".RBtn2").click(function(){

    $(".slidelist2").animate({left:-100+"%"},1000,function(){
      $(".slidelist2 div:first-child").appendTo(".slidelist2");//1번 사진을 3번 뒤로 붙이기
      $(".slidelist2").css('left','0');
    });
  });
  $(".RBtn3").click(function(){

    $(".slidelist3").animate({left:-100+"%"},1000,function(){
      $(".slidelist3 div:first-child").appendTo(".slidelist3");//1번 사진을 3번 뒤로 붙이기
      $(".slidelist3").css('left','0');
    });
  });
  $(".RBtn4").click(function(){

    $(".slidelist4").animate({left:-100+"%"},1000,function(){
      $(".slidelist4 div:first-child").appendTo(".slidelist4");//1번 사진을 3번 뒤로 붙이기
      $(".slidelist4").css('left','0');
    });
  });

  $(".LBtn").click(function(){
    $(".slidelist1 div:last-child").prependTo(".slidelist1");
    $(".slidelist1").css('left','-100%');
    $(".slidelist1").animate({left:0},1000);
    // number--;
    // if(number<-3){
    //   number=0;
    // }
    // tabBtn(number);
});

$(".LBtn2").click(function(){

$(".slidelist2 div:last-child").prependTo(".slidelist2");
$(".slidelist2").css('left','-100%');
$(".slidelist2").animate({left:0},1000);

});
$(".LBtn3").click(function(){

$(".slidelist3 div:last-child").prependTo(".slidelist3");
$(".slidelist3").css('left','-100%');
$(".slidelist3").animate({left:0},1000);

});
$(".LBtn4").click(function(){

$(".slidelist4 div:last-child").prependTo(".slidelist4");
$(".slidelist4").css('left','-100%');
$(".slidelist4").animate({left:0},1000);
});

$(".storyC").mouseenter(function(){
  $(".storyF").show();
});
$(".storyC").mouseleave(function(){
  $(".storyF").hide();
});

$(".sliceC").mouseenter(function(){
  $(".sliceF").show();
});
$(".sliceC").mouseleave(function(){
  $(".sliceF").hide();
});

$(".kidC").mouseenter(function(){
  $(".kidF").show();
});
$(".kidC").mouseleave(function(){
  $(".kidF").hide();
});

$(".cookC").mouseenter(function(){
  $(".cookF").show();
});
$(".cookC").mouseleave(function(){
  $(".cookF").hide();
});

$(".snackC").mouseenter(function(){
  $(".snackF").show();
});
$(".snackC").mouseleave(function(){
  $(".snackF").hide();
});

$(".sliceC").click(function(){
  $(".menu1").show();
  $(".menu2").hide();
  $(".menu3").hide();
  $(".menu4").hide();
});
$(".kidC").click(function(){
  $(".menu1").hide();
  $(".menu2").show();
  $(".menu3").hide();
  $(".menu4").hide();
});
$(".cookC").click(function(){
  $(".menu1").hide();
  $(".menu2").hide();
  $(".menu3").show();
  $(".menu4").hide();
});
$(".snackC").click(function(){
  $(".menu1").hide();
  $(".menu2").hide();
  $(".menu3").hide();
  $(".menu4").show();
});
$(".cheezeC").mouseenter(function(){
  $(".cheezeF").show();
});
$(".cheezeC").mouseleave(function(){
  $(".cheezeF").hide();
});

$(".tab_menu1 li a:first").addClass("on");
$(".block_cheeze1 section").hide();
$(".block_cheeze1 section:first").show();
$(".tab_menu1 li").click(function(){
  $(".block_cheeze1 section").hide();
  $(".tab_menu1 a").removeClass("on");
  $(this).find("a").addClass("on");
  var a = $(this).find("a").attr("href");
  $(a).show();
  return false;
});

$(".tab_menu2 li a:first").addClass("on");
$(".block_cheeze2 section").hide();
$(".block_cheeze2 section:first").show();
$(".tab_menu2 li").click(function(){
  $(".block_cheeze2 section").hide();
  $(".tab_menu2 a").removeClass("on");
  $(this).find("a").addClass("on");
  var a = $(this).find("a").attr("href");
  $(a).show();
  return false;
});

$(".tab_menu3 li a:first").addClass("on");
$(".block_cheeze3 section").hide();
$(".block_cheeze3 section:first").show();
$(".tab_menu3 li").click(function(){
  $(".block_cheeze3 section").hide();
  $(".tab_menu3 a").removeClass("on");
  $(this).find("a").addClass("on");
  var a = $(this).find("a").attr("href");
  $(a).show();
  return false;
});


$(".RBtn5").click(function(){

  $(".slidelist5").animate({left:-100+"%"},1000,function(){
    $(".slidelist5 > div:first-child").appendTo(".slidelist5");//1번 사진을 3번 뒤로 붙이기
    $(".slidelist5").css('left','0');
  });
});

$(".LBtn5").click(function(){

$(".slidelist5 > div:last-child").prependTo(".slidelist5");
$(".slidelist5").css('left','-100%');
$(".slidelist5").animate({left:0},1000);
});

// function moveSlide(val) {
//     let index2 = val+1
//     var offset = $(".slideimg" + index2).offset();
//     $(".slidelist1").animate({left:offset},1000);
//     console.log("offset : "+offset);
//

    // if(index==0){
    //   $(".slidelist1").animate({left:0},1000);
    //   $(".tab_1 li").eq(0).find("a").addClass("on");
    //   $(".tab_1 li").eq(1).find("a").removeClass("on");
    //   $(".tab_1 li").eq(2).find("a").removeClass("on");
    //   $(".tab_1 li").eq(3).find("a").removeClass("on");
    // }
    // if(index==1){
    //   $(".slidelist1").animate({left:-100+'%'},1000);
    //   $(".tab_1 li").eq(0).find("a").removeClass("on");
    //   $(".tab_1 li").eq(1).find("a").addClass("on");
    //   $(".tab_1 li").eq(2).find("a").removeClass("on");
    //   $(".tab_1 li").eq(3).find("a").removeClass("on");
    // }
    // if(index==2){
    //   $(".slidelist1").animate({left:-200+'%'},1000);
    //   $(".tab_1 li").eq(0).find("a").removeClass("on");
    //   $(".tab_1 li").eq(1).find("a").removeClass("on");
    //   $(".tab_1 li").eq(2).find("a").addClass("on");
    //   $(".tab_1 li").eq(3).find("a").removeClass("on");
    // }
    // if(index==3){
    //   $(".slidelist1").animate({left:-300+'%'},1000);
    //   $(".tab_1 li").eq(0).find("a").removeClass("on");
    //   $(".tab_1 li").eq(1).find("a").removeClass("on");
    //   $(".tab_1 li").eq(2).find("a").removeClass("on");
    //   $(".tab_1 li").eq(3).find("a").addClass("on");
    // }
    // console.log("Mindex : "+index);
// }

// function tabBtn(num) {
//   let index = $(this).index();
//   let eq = index+num+1;
//   console.log("num : "+num);
//   console.log("index : "+index);
//   console.log("eq : "+eq);
//   console.log("number : "+number);
//   // if(eq>3 || eq==-4){
//   //   number=0;
//   //   eq=0;
//   // }
//   $(".tab_1 > li").find("a").removeClass("on");
//   $(".tab_1 > li").eq(eq).find("a").addClass("on");
//   // moveSlide(index);
//   return false;
// }
// function tabBtn2(){
//   let index = $(this).index();
//   $(".tab_1 > li").find("a").removeClass("on");
//   $(".tab_1 > li").eq(index).find("a").addClass("on");
//   // moveSlide(index);
//   let index2 = index+1
//   let slideImg = $('.slideimg'+index2).offset().left;
//   console.log(slideImg);
//   moveSlide(slideImg);
// }

// $(".tab_1 > li").on('click', tabBtn2);
//
// $(".tab_1 > li> a:first").addClass("on");
// $(".tab_1 > li").click(function(){
//   $(".tab_1 > li").find("a").removeClass("on");
//   $(this).find("a").addClass("on");
//   var a = $(this).find("a").attr("href");
//   $(a).show();
//   console.log(a);
  // let index = $(this).index();
  // console.log(index);
  // moveSlide(index);
//   return false;
// });
});
