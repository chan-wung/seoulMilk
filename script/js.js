$(function(){

  // $(document).ready(function(){
  //   // let winScr = $(window).scrollTop();
  //   // let section1 = $('.box').eq(0).offset().top;
  //   // let section2 = $('.box').eq(1).offset().top;
  //   // let section3 = $('.box').eq(2).offset().top;
  //   // let section4 = $('.box').eq(3).offset().top;
  //   // let docScr = $(this).scrollTop()
  //   // console.log(section1);
  //   // console.log(section2);
  //   // console.log(section3);
  //   // console.log(section4);
  //   // console.log("answer : "+winScr);
  //   // console.log("answer2 : "+docScr);
  //
  //   $('body, html').animate({
  //     scrollTop: 0
  //   }, 100);
  // })

//   window.onload = function() {
//  setTimeout (function () {
//   scrollTo(0,0);
//  }, 100); //100ms for example
// }

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});



  // if(winScr>=section1){
  //   $('.btn').find('div').eq(0).addClass('on');
  //   $('.btn').find("span").eq(0).addClass("a");
  // }
  // if(winScr>=section2){
  //   $('.btn').find('div').eq(1).addClass('on');
  //   $('.btn').find("span").eq(1).addClass("a");
  // }
  // if(winScr>=section3){
  //   $('.btn').find('div').eq(2).addClass('on');
  //   $('.btn').find("span").eq(2).addClass("a");
  // }
  // if(winScr>=section4){
  //   $('.btn').find('div').eq(3).addClass('on');
  //   $('.btn').find("span").eq(3).addClass("a");
  // }
  // else{
  //   $('.btn').find('div').removeClass('on');
  //   $('.btn').find("span").removeClass("a");
  // }




  var elm = ".box";
  $(elm).each(function (index) {
      // 개별적으로 Wheel 이벤트 적용

      $(this).on('ready load', function(){
        console.log(index);
        let boxIndex = $(this).index();
        if(boxIndex==0){
          $('.btn').find('div').removeClass('on');
          $('.btn').find("span").removeClass("a");
          $('.btn').find('div').eq(0).addClass('on');
          $('.btn').find("span").eq(0).addClass("a");
        }
        if(boxIndex==1){
          $('.btn').find('div').removeClass('on');
          $('.btn').find("span").removeClass("a");
          $('.btn').find('div').eq(1).addClass('on');
          $('.btn').find("span").eq(1).addClass("a");
        }
        if(boxIndex==2){
          $('.btn').find('div').removeClass('on');
          $('.btn').find("span").removeClass("a");
          $('.btn').find('div').eq(2).addClass('on');
          $('.btn').find("span").eq(2).addClass("a");
        }
        if(boxIndex==3){
          $('.btn').find('div').removeClass('on');
          $('.btn').find("span").removeClass("a");
          $('.btn').find('div').eq(3).addClass('on');
          $('.btn').find("span").eq(3).addClass("a");
        }
      })
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          var elmIndex = $(this).index();


          // console.log("wheelDelta : ",event.wheelDelta);
          // console.log("detail : ",event.detail);
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;

          }
          var moveTop = $(window).scrollTop();
          console.log("moveTop : ",moveTop);
          var elmSelecter = $(elm).eq(index);
          // 마우스휠을 위에서 아래로
          if (delta < 0) {
              if ($(elmSelecter).next() != undefined) {
                  try{
                      moveTop = $(elmSelecter).next().offset().top;
                      if(elmIndex==0){
                          $('.btn').find('div').removeClass("on");
                          $('.btn').find('div').eq(1).addClass('on');
                          $('.btn').find("span").addClass("a");
                          $('.btn').find("span").eq(0).removeClass("a");
                          $('.btn').find("span").eq(2).removeClass("a");
                          $('.btn').find("span").eq(3).removeClass("a");
                      }
                      if(elmIndex==1){
                          $('.btn').find('div').removeClass("on");
                          $('.btn').find('div').eq(2).addClass('on');
                          $('.btn').find("span").addClass("a");
                          $('.btn').find("span").eq(0).removeClass("a");
                          $('.btn').find("span").eq(1).removeClass("a");
                          $('.btn').find("span").eq(3).removeClass("a");
                      }
                      if(elmIndex==2){
                          $('.btn').find('div').removeClass("on");
                          $('.btn').find('div').eq(3).addClass('on');
                          $('.btn').find("span").addClass("a");
                          $('.btn').find("span").eq(0).removeClass("a");
                          $('.btn').find("span").eq(1).removeClass("a");
                          $('.btn').find("span").eq(2).removeClass("a");
                      }
                  }catch(e){}
              }
          // 마우스휠을 아래에서 위로
          } else {
              if ($(elmSelecter).prev() != undefined) {
                  try{
                      moveTop = $(elmSelecter).prev().offset().top;
                      if(elmIndex==1){
                          $('.btn').find('div').removeClass("on");
                          $('.btn').find('div').eq(0).addClass('on');
                          console.log("eee");
                          $('.btn').find("span").addClass("a");
                          $('.btn').find("span").eq(1).removeClass("a");
                          $('.btn').find("span").eq(2).removeClass("a");
                          $('.btn').find("span").eq(3).removeClass("a");
                      }
                      if(elmIndex==2){
                          $('.btn').find('div').removeClass("on");
                          $('.btn').find('div').eq(1).addClass('on');
                          $('.btn').find("span").addClass("a");
                          $('.btn').find("span").eq(0).removeClass("a");
                          $('.btn').find("span").eq(2).removeClass("a");
                          $('.btn').find("span").eq(3).removeClass("a");
                      }
                      if(elmIndex==3){
                          $('.btn').find('div').removeClass("on");
                          $('.btn').find('div').eq(2).addClass('on');
                          $('.btn').find("span").addClass("a");
                          $('.btn').find("span").eq(0).removeClass("a");
                          $('.btn').find("span").eq(1).removeClass("a");
                          $('.btn').find("span").eq(3).removeClass("a");
                      }
                  }catch(e){}
              }
          }
          // 화면 이동 0.4초(400)
          $("html,body").stop().animate({ scrollTop: moveTop + 'px'}, 800);
      });

  });
  var srcVal = $("header .container img").attr("src");


  $(".nav > li").mouseenter(function(){
    $(".submenu, .sub_back").stop().slideDown(400);
  });
  $(".nav > li").mouseleave(function(){
    $(".submenu, .sub_back").stop().slideUp(50);
  });
  $(".nav > li").mouseenter(function(){
  $(this).find("a:first").addClass("nav_active");

  });
  $(".nav > li").mouseleave(function(){
  $(this).find("a:first").removeClass("nav_active");

  });
  $("header").mouseenter(function(){
    $("header").addClass("hdActive");
    $(".nav > li > a").css("color","#333");
    $("header .container img").attr({"src":srcVal.replace("logo_w1.png","logo_r1.png")});
  });
  $("header").mouseleave(function(){
    $("header").removeClass("hdActive");
    $(".nav > li > a").css("color","#fff");
    $("header .container img").attr({"src":srcVal.replace("logo_r1.png","logo_w1.png")});
  });

  $(".block div").hide();
  $(".tap_menu li:first").addClass("active");
  $(".block div:first").show();
  $(".tap_menu li").click(function(){
    $(".block div").hide();
    $(".map > .table").hide();
    $(".tap_menu li").removeClass("active");
    $(this).addClass("active");
    $(".map_1").hide();
    $(".map_2").hide();
    $(".map_3").hide();
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });

  $(function(){
    $(".lbtn").click(function(){
      $(".slidelist .slideimg:last").prependTo(".slidelist");
    });
    $(".rbtn").click(function(){
      $(".slidelist .slideimg:first").appendTo(".slidelist");
    });
  });

 $("p.more").mouseenter(function(){
   $(".man > img").stop().animate({top:0},800);
 });
 $("p.more").mouseleave(function(){
   $(".man > img").stop().animate({top:"285px"},800);
 });

// $(".map > table").hide();
 $(".sbtn1").click(function(){
   var res = $(".input1").val();
   // var text = $(".inputbox1 > p").text(res);
   $(".inputbox1 > p").prepend("<a href='#!'>"+res+"</a>"+"<br>");
   $(".inputbox1").show();
   $(".map > .table").show();
   console.log(res);
 });

$("#city").change(function(){
  var value = $(this).val();
  console.log(value);
  if(value=="서울특별시"){
    $("#city2").html("<option>구,군</option><option>강남구</option><option>강동구</option><option>강북구</option><option>강서구</option><option>관악구</option><option>광진구</option><option>구로구</option><option>금천구</option><option>노원구</option><option>도봉구</option><option>동대문구</option><option>동작구</option><option>마포구</option><option>서대문구</option><option>서초구</option><option>성동구</option><option>성북구</option><option>송파구</option><option>양천구</option><option>영등포구</option><option>용산구</option><option>은평구</option><option>종로구</option><option>중구</option><option>중랑구</option>");
  }
  else if(value=="부산광역시"){
    $("#city2").html("<option>구,군</option><option>강서구</option><option>금정구</option><option>기장군</option><option>남구</option><option>동구</option><option>동래구</option><option>부산진구</option><option>북구</option><option>사상구</option><option>사하구</option><option>서구</option><option>수영구</option><option>연제구</option><option>영도구</option><option>중구</option><option>해운대구</option>");
  }
  else if(value=="대구광역시"){
    $("#city2").html("<option>구,군</option><option>남구</option><option>달서구</option><option>달성군</option><option>동구</option><option>북구</option><option>서구</option><option>수성구</option><option>중구</option>");
  }
  else if(value=="인천광역시"){
    $("#city2").html("<option>구,군</option><option>강화군</option><option>계양구</option><option>남구</option><option>남동구</option><option>동구</option><option>부평구</option><option>서구</option><option>연수구</option><option>중구</option>");
  }
  else if(value=="광주광역시"){
    $("#city2").html("<option>구,군</option><option>광산구</option><option>남구</option><option>동구</option><option>북구</option><option>서구</option>");
  }
  else if(value=="대전광역시"){
    $("#city2").html("<option>구,군</option><option>대덕구</option><option>동구</option><option>서구</option><option>유성구</option><option>중구</option>");
  }
  else if(value=="울산광역시"){
    $("#city2").html("<option>구,군</option><option>남구</option><option>동구</option><option>북구</option><option>울주군</option><option>중구</option>");
  }
  else if(value=="강원도"){
    $("#city2").html("<option>구,군</option><option>강릉시</option><option>고성군</option><option>동해시</option><option>삼척시</option><option>속초시</option><option>양구군</option><option>양양군</option><option>영월군</option><option>원주시</option><option>인제군</option><option>정선군</option><option>철원군</option><option>춘천시</option><option>태백시</option><option>평창군</option><option>홍천군</option><option>화천군</option><option>횡성군</option>");
  }
  else if(value=="경기도"){
    $("#city2").html("<option>구,군</option><option>가평군</option><option>고양시</option><option>과천시</option><option>광명시</option><option>광주시</option><option>구리시</option><option>군포시</option><option>김포시</option><option>남양주시</option><option>동두천시</option><option>부천시</option><option>성남시</option><option>수원시</option><option>시흥시</option><option>안산시</option><option>안성시</option><option>안양시</option><option>양주군</option><option>양주시</option><option>양평군</option><option>여주군</option><option>연천군</option><option>오산시</option><option>용인시</option><option>의왕시</option><option>의정부시</option><option>이천시</option><option>파주시</option><option>평택시</option><option>포천군</option><option>포천시</option><option>하남시</option><option>화성시</option>");
  }
  else if(value=="경상남도"){
    $("#city2").html("<option>구,군</option><option>거제시</option><option>거창군</option><option>고성군</option><option>김해시</option><option>남해군</option><option>마산시</option><option>밀양시</option><option>사천시</option><option>산청군</option><option>양산시</option><option>진주시</option><option>진해시</option><option>창녕군</option><option>창원시</option><option>통영시</option><option>하동군</option><option>함안군</option><option>함양군</option><option>합천군</option>");
  }
  else if(value=="경상북도"){
    $("#city2").html("<option>구,군</option><option>경산시</option><option>경주시</option><option>고령군</option><option>구미시</option><option>군위군</option><option>김천시</option><option>문경시</option><option>봉화군</option><option>상주시</option><option>성주군</option><option>안동시</option><option>영덕군</option><option>영주시</option><option>영천시</option><option>예천군</option><option>울릉군</option><option>울진군</option><option>의성군</option><option>청도군</option><option>칠곡군</option><option>포항시</option>");
  }
  else if(value=="전라남도"){
    $("#city2").html("<option>구,군</option><option>강진군</option><option>고흥군</option><option>곡성군</option><option>광양시</option><option>나주시</option><option>담양군</option><option>목포시</option><option>무안군</option><option>보성군</option><option>순천시</option><option>여수시</option><option>영광군</option><option>영암군</option><option>완도군</option><option>장성군</option><option>장흥군</option><option>함평군</option><option>해남군</option><option>화순군</option>");
  }
  else if(value=="전라북도"){
    $("#city2").html("<option>구,군</option><option>고창군</option><option>군산시</option><option>김제시</option><option>남원시</option><option>무주군</option><option>부안군</option><option>완주군</option><option>익산시</option><option>전주시</option><option>정읍시</option><option>진안군</option>");
  }
  else if(value=="제주특별자치도"){
    $("#city2").html("<option>구,군</option><option>남제주군</option><option>북제주군</option><option>서귀포시</option><option>제주시</option>");
  }
  else if(value=="충청남도"){
    $("#city2").html("<option>구,군</option><option>계룡시</option><option>공주시</option><option>금산군</option><option>논산시</option><option>당진군</option><option>보령시</option><option>부여군</option><option>서산시</option><option>아산시</option><option>연기군</option><option>예산군</option><option>천안시</option><option>청양군</option><option>태안군</option><option>홍성군</option>");
  }
  else if(value=="충청북도"){
    $("#city2").html("<option>구,군</option><option>괴산군</option><option>단양군</option><option>보은군</option><option>영동군</option><option>옥천군</option><option>음성군</option><option>제천시</option><option>진천군</option><option>청원군</option><option>청주시</option><option>충주시</option>");
  }
  else if(value=="세종특별자치시"){
    $("#city2").html("<option>구,군</option>");
  }
});

$("#city2").change(function(){
  var value = $(this).val();
  console.log(value);
  $(".inputbox2").show();
  if(value=="강남구"){
    $(".inputbox2").html("<div class='search_city'><p class='black'><a href='.map_1'>신사동</a></p><p class='small'>서울특별시 강남구 신사동 569-17</p><p class='small'>02-542-7349</p> <br><hr></div> <div class='search_city'><p class='black'><a href='.map_2'>개포동</a></p><p class='small'>서울특별시 강남구 개포2동 171-11호</p><p class='small'>02-572-3039</p> <br><hr></div> <div class='search_city'><p class='black'><a href='.map_3'>삼성동</a></p><p class='small'>서울특별시 강남구 삼성1동 71-6</p><p class='small'>02-546-1467</p> <br><hr></div>");
    // $(".inputbox2").html("<div class='search_city'><p class='black'>개포동</p><p class='small'>서울특별시 강남구 개포2동 171-11호</p><p class='small'>02-572-3039</p> <br><hr></div>");

  }
  else if(value=="강동구"){
    $(".inputbox2").html("<div class='search_city'><p class='black'>암사2동</p><p class='small'>서울특별시 강동구 올림픽로91길 21</p><p class='small'>02-429-0561</p> <br><hr></div> <div class='search_city'><p class='black'>고덕동</p><p class='small'>서울특별시 강동구 암사길 70</p><p class='small'>02-427-7349</p> <br><hr></div> <div class='search_city'><p class='black'>암사동</p><p class='small'>서울특별시 강동구 천호동 358-5</p><p class='small'>02-475-6575</p> <br><hr></div>");}
  else{
    $(".inputbox2").hide();
  }

  $(".search_city >p").click(function(){
    $(".map_1").show();
    console.log("aaa");
    $(".map_2").hide();
    $(".map_3").hide();
    var a = $(this).find("a").attr("href");
    $(a).show();
    return false;
  });
});


$(".popup_one").click(function(){
  $(".popup1").show();
  $(".popup_layer").show();
  $(".popup_one").css({"zIndex":"4"});
  $(".popup_one img:hover").reamoveAttr("animation");
  $(".Leftlbtn1 a").hide();
});
$('.popup_one').mouseenter(function(){
  if($('.popup_layer').is(':visible')){
    $('.popup_one').removeClass('on');
    console.log('ccc');
  }else{
    $('.popup_one').addClass('on');
    console.log('ddd');
  }
$(".Leftlbtn1 a").show();
});
$('.popup_one').mouseleave(function(){
    $('.popup_one').removeClass('on');
    $(".Leftlbtn1 a").hide();
});
$(".close").click(function(){
  $(".popup1").hide();
  $(".popup_layer").hide();
  $(".popup_one").css({"zIndex":"1"});
  $(".popup2").hide();
  $(".popup_layer").hide();
  $(".popup_two").css({"zIndex":"1"});
  $(".popup3").hide();
  $(".popup_layer").hide();
  $(".popup_three").css({"zIndex":"1"});
  $(".popup4").hide();
  $(".popup_layer").hide();
  $(".popup_four").css({"zIndex":"1"});
  $(".popup5").hide();
  $(".popup_layer").hide();
  $(".popup_five").css({"zIndex":"1"});
});

$(".popup_two").click(function(){
  $(".popup2").show();
  $(".popup_layer").show();
  $(".popup_two").css({"zIndex":"6"});
  $(".Leftlbtn2 a").hide();
});
$('.popup_two').mouseenter(function(){
  if($('.popup_layer').is(':visible')){
    $('.popup_two').removeClass('on');
    console.log('ccc');
  }else{
    $('.popup_two').addClass('on');
    console.log('ddd');
  }
  $(".Leftlbtn2 a").show();
});
$('.popup_two').mouseleave(function(){
    $('.popup_two').removeClass('on');
    $(".Leftlbtn2 a").hide();
});

$(".popup_three").click(function(){
  $(".popup3").show();
  $(".popup_layer").show();
  $(".popup_three").css({"zIndex":"6"});
  $(".Clickrbtn3 a").hide();
});
$('.popup_three').mouseenter(function(){
  if($('.popup_layer').is(':visible')){
    $('.popup_three').removeClass('on');
    console.log('ccc');
  }else{
    $('.popup_three').addClass('on');
    console.log('ddd');
  }
  $(".Clickrbtn3 a").show();
});
$('.popup_three').mouseleave(function(){
    $('.popup_three').removeClass('on');
    $(".Clickrbtn3 a").hide();
});

$(".popup_four").click(function(){
  $(".popup4").show();
  $(".popup_layer").show();
  $(".popup_four").css({"zIndex":"6"});
  $(".Clickrbtn4 a").hide();
});
$('.popup_four').mouseenter(function(){
  if($('.popup_layer').is(':visible')){
    $('.popup_four').removeClass('on');
    console.log('ccc');
  }else{
    $('.popup_four').addClass('on');
    console.log('ddd');
  }
  $(".Clickrbtn4 a").show();
});
$('.popup_four').mouseleave(function(){
    $('.popup_four').removeClass('on');
    $(".Clickrbtn4 a").hide();
});

$(".popup_five").click(function(){
  $(".popup5").show();
  $(".popup_layer").show();
  $(".popup_five").css({"zIndex":"6"});
  $(".Leftlbtn5 a").hide();
});
$('.popup_five').mouseenter(function(){
  if($('.popup_layer').is(':visible')){
    $('.popup_five').removeClass('on');
    console.log('ccc');
  }else{
    $('.popup_five').addClass('on');
    console.log('ddd');
  }
  $(".Leftlbtn5 a").show();
});
$('.popup_five').mouseleave(function(){
    $('.popup_five').removeClass('on');
    $(".Leftlbtn5 a").hide();
});
});
