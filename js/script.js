
//▼▼▼　スクロール禁止機能　▼▼▼
function handleTouchMove(event) {
  event.preventDefault();
}
  //PCスクロール禁止
document.addEventListener('mousewheel', handleTouchMove, { passive: false });
setTimeout(function() {
  //PCスクロール復帰
  document.removeEventListener('mousewheel', handleTouchMove, { passive: false });
}, 3000);

  //SPスクロール禁止
document.addEventListener('touchmove', handleTouchMove, { passive: false });
setTimeout(function() {
  //SPスクロール復帰
  document.removeEventListener('touchmove', handleTouchMove, { passive: false });
}, 3000);
//▲▲▲　スクロール禁止機能　▲▲▲



$(function(){

  //▼▼▼　リロード時ページ最上部へ移動　▼▼▼
  $('html,body').animate({ scrollTop: 0 }, '1');
  //▲▲▲　リロード時ページ最上部へ移動　▲▲▲

  //▼▼▼　WOW.js　発火　▼▼▼
  new WOW().init();
  //▲▲▲　WOW.js　発火　▲▲▲


  //▼▼▼　ローディング　▼▼▼
  var waiting = $('.waiting__bg');
  var waitingLogo = $('.waiting__logo');
  var objects = $('.objects');
  var header = $('.header');
  var fvBlue = $('.object-sec0__bg-a');
  var fvYellow = $('.object-sec0__bg-b');

  var fvPanelBelowYellow = $('.panel-belowOn');
  var fvPanelBelowBlue = $('.panel-belowOff');
  var fvPanelUpYellow = $('.panel-upOn');
  var fvPanelUpBlue = $('.panel-upOff');

  var mainItemGreen = $('.itemOn');
  var mainItemYellow = $('.itemOff');
  var mainItem = $('.mv__itemImg');
  var mainTtl = $('.mv__logo');
  var mvTheme = $('.mv__theme');
  var waitingLogo_sec = $('.waiting__logo02');
  var waitingLogo_con = $('.waiting__logo02-container');
  var waitingLogo_outer = $('.waiting__outer');
  var spView = $('.spView');

  var obj01 = $('.obj-01On');
  var obj01Sub = $('.obj-01Off');
  var obj02 = $('.obj-02On');
  var obj02Sub = $('.obj-02Off');
  var obj03 = $('.obj-03On');
  var obj03Sub = $('.obj-03Off');
  var obj05 = $('.obj-05On');
  var obj05Sub = $('.obj-05Off');
  var obj06 = $('.obj-06On');
  var obj06Sub = $('.obj-06Off');
  



function asyncFst(){
  var d = new $.Deferred();
  setTimeout(function(){
    waitingLogo.css({
      'display':'block',
      'animation':'rotate-scale 2.5s',
      'animation-fill-mode':'forwards'
    });
    d.resolve();
  },100);
  return d.promise();
}
asyncFst()
  .then(function() {
    var d2 = new $.Deferred();
    asyncSec(function() {
      waiting.css('display','none');
      fvYellow.css('display','block');
      spView.css('display','block');
      d2.resolve();
    });
    return d2.promise();
  })
  .then(function() {
    var d3 = new $.Deferred();
    asyncTrd(function() {
      waitingLogo_con.css('display','none');
      fvBlue.css('display','block');
      d3.resolve();
    });
    return d3.promise();
  })
  .then(function() {
    var d4 = new $.Deferred();
    asyncFor(function() {
      mainItem.css('opacity','1');
      mainTtl.css('opacity','1');
      mvInteractionSet();
      d4.resolve();
    });
    return d4.promise();
  })
  .then(function() {
    asyncFif(function() {
      mvTheme.css('display','block');
      objects.css('display','block');
      header.css('display','flex');
    });
  })

  function asyncSec(f) {
    setTimeout(f, 1500);
  }
  function asyncTrd(f) {
    setTimeout(f, 1000);
  }
  function asyncFor(f) {
    setTimeout(f, 1000);
  }
  function asyncFif(f) {
    setTimeout(f, 1000);
  }


  function mvInteractionSet(){
    mvImg();
    setTimeout(function() {
      mvPanel_below();
      mvPanel_up();
    }, 1500);
  }


  function mvPanel_below(){
    setInterval(function(){
      fvPanelBelowYellow.toggleClass('panel-belowOff panel-belowOn');
      fvPanelBelowBlue.toggleClass('panel-belowOn panel-belowOff');
    },2500)
  }

  function mvPanel_up(){
    setInterval(function(){
      fvPanelUpBlue.toggleClass('panel-upOff panel-upOn');
      fvPanelUpYellow.toggleClass('panel-upOn panel-upOff');
    },2500)
  }

  function mvImg(){
    setInterval(function(){
      mainItemGreen.toggleClass('itemOff itemOn');
      mainItemYellow.toggleClass('itemOn itemOff');
      obj01.toggleClass('obj-01Off obj-01On');
      obj01Sub.toggleClass('obj-01On obj-01Off');
      obj02.toggleClass('obj-02Off obj-02On');
      obj02Sub.toggleClass('obj-02On obj-02Off');
      obj03.toggleClass('obj-03Off obj-03On');
      obj03Sub.toggleClass('obj-03On obj-03Off');
      obj05.toggleClass('obj-05Off obj-05On');
      obj05Sub.toggleClass('obj-05On obj-05Off');
      obj06.toggleClass('obj-06Off obj-06On');
      obj06Sub.toggleClass('obj-06On obj-06Off');
    },2500)
  }


  
  //▼▼▼　ScrollMagicとTweenMax　▼▼▼
  var controller = new ScrollMagic.Controller();
  var tween0 = TweenMax.to(".concept__ttl",1,{
    opacity: 1,
    y: -250,
    // x: -250,
    ease : "Linear"
  });
  var tween1 = TweenMax.to(".objects__shape7",1,{
    opacity: 1,
    y: -50,
    x: 100,
    ease : "Linear"
  });
  var tween2 = TweenMax.to(".objects__shape8",1,{
    opacity: 1,
    y: 60,
    x: -200,
    ease : "Linear"
  });
  var tween3 = TweenMax.to(".object-sec2__shape11",1,{
    opacity: 1,
    y: 70,
    x: -100,
    ease : "Linear"
  });
  var tween4 = TweenMax.to(".object-sec6__shape13",1,{
    opacity: 1,
    y: 130,
    x: -100,
    ease : "Linear"
  });
  var tween5 = TweenMax.to(".object-sec6__shape16",1,{
    opacity: 1,
    y: 100,
    x: 250,
    ease : "Linear"
  });
  var tween6 = TweenMax.to(".object-sec10__shape18",1,{
    opacity: 1,
    y: 130,
    x: -100,
    ease : "Linear"
  });
  var tween7 = TweenMax.to(".object-sec10__shape19",1,{
    opacity: 1,
    y: 130,
    x: -100,
    ease : "Linear"
  });


  var scene0 = new ScrollMagic.Scene({
    duration: 1200,
    triggerHook: 'onEnter',
    triggerElement: ".concept__ttl",
  })
  .setTween(tween0)
  .addTo(controller);

  var scene1 = new ScrollMagic.Scene({
    duration: 2000,
    triggerHook: 'onEnter',
    triggerElement: ".objects__shape7",
  })
  .setTween(tween1)
  .addTo(controller);

  var scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerHook: 'onEnter',
    triggerElement: ".objects__shape8",
  })
  .setTween(tween2)
  .addTo(controller);

  var scene3 = new ScrollMagic.Scene({
    duration: 2000,
    triggerHook: 'onEnter',
    triggerElement: ".object-sec2__shape11",
  })
  .setTween(tween3)
  .addTo(controller);

  var scene4 = new ScrollMagic.Scene({
    duration: 3000,
    triggerHook: 'onEnter',
    triggerElement: ".object-sec6__shape13",
  })
  .setTween(tween4)
  .addTo(controller);

  var scene5 = new ScrollMagic.Scene({
    duration: 4000,
    triggerHook: 'onEnter',
    triggerElement: ".object-sec6__shape16",
  })
  .setTween(tween5)
  .addTo(controller);

  var scene6 = new ScrollMagic.Scene({
    duration: 3000,
    triggerHook: 'onEnter',
    triggerElement: ".object-sec10__shape18",
  })
  .setTween(tween6)
  .addTo(controller);

  var scene7 = new ScrollMagic.Scene({
    duration: 1500,
    triggerHook: 'onEnter',
    triggerElement: ".object-sec10__shape19",
  })
  .setTween(tween7)
  .addTo(controller);
  //▲▲▲　ScrollMagicとTweenMax　▲▲▲
});

document.addEventListener('DOMContentLoaded', function(){
  var greenWall = document.querySelector('.greenWall');
  var greenWallSec = document.querySelector('.greenWall-sec');
  var yellowWall = document.querySelector('.yellowWall');
  var whiteWall = document.querySelector('.whiteWall');
  var changePnt_fst = document.querySelector('.objects__shape6');
  var changePnt_sec = document.querySelector('.objects__bottle');
  var changePnt_trd = document.querySelector('.object-sec6__shape13');
  var changePnt_fth = document.querySelector('.object-sec6__shape16');
  var elemZoom = document.querySelector('.green__lineUp-img');
  var elemZoomSec = document.querySelector('.otherContents__feat-img');
  var black = document.querySelector('.blackLogo');
  var white = document.querySelector('.whiteLogo');
  var pcLogoOn = document.querySelector('.pcLogo-on');
  var pcLogoOff = document.querySelector('.pcLogo-off');

  var pcObj01 = document.querySelector('.pcObj-01on');
  var pcObj01sub = document.querySelector('.pcObj-01off');
  var pcObj02 = document.querySelector('.pcObj-02on');
  var pcObj02sub = document.querySelector('.pcObj-02off');
  var pcObj03 = document.querySelector('.pcObj-03on');
  var pcObj03sub = document.querySelector('.pcObj-03off');
  var pcObj04 = document.querySelector('.pcObj-04on');
  var pcObj04sub = document.querySelector('.pcObj-04off');
  var pcObj05 = document.querySelector('.pcObj-05on');
  var pcObj05sub = document.querySelector('.pcObj-05off');
  
  var flug = true;
  document.addEventListener('scroll', function(){
    if(flug){
      flug = false;
      setTimeout(function(){
        document.querySelector('.objects__sunglass').style.display = "block";

        //変数定義
        var changePnt_fst_fire = changePnt_fst.getBoundingClientRect().top;
        var changePnt_sec_fire = changePnt_sec.getBoundingClientRect().top;
        var changePnt_trd_fire = changePnt_trd.getBoundingClientRect().top;
        var changePnt_fth_fire = changePnt_fth.getBoundingClientRect().top;
        var elemZoom_fire = elemZoom.getBoundingClientRect().top;
        var elemZoomSec_fire = elemZoomSec.getBoundingClientRect().top;
        // console.log(changePnt_fst_fire);
        // console.log(changePnt_sec_fire);
        // console.log(changePnt_trd_fire);
        // console.log(changePnt_fth_fire);
        // ↓↓↓ 各処理記述 ↓↓↓
        //背景変更（MV → CONCEPT、CONCEPT → MV）
        if(changePnt_fst_fire < 0){
          greenWall.classList.add('coverUp-g');
          black.style.display = "none";
          white.style.display = "block";
          pcLogoOn.classList.add('pcLogo-off');
          pcLogoOff.classList.remove('pcLogo-off');
          pcLogoOff.classList.add('pcLogo-on');
        }else if(changePnt_fst_fire > 0){
          greenWall.classList.remove('coverUp-g');
          black.style.display = "block";
          white.style.display = "none";
          pcLogoOn.classList.add('pcLogo-on');
          pcLogoOn.classList.remove('pcLogo-off');
          pcLogoOff.classList.remove('pcLogo-on');
          pcLogoOff.classList.add('pcLogo-off');
        }

        // 背景変更（CONCEPT → GreenFist、GreenFist → CONCEPT）
        if(changePnt_sec_fire <= -10){
          yellowWall.classList.add('coverUp-y');
          pcObj01.classList.remove('pcObj-01on');
          pcObj01.classList.add('pcObj-01off');
          pcObj01sub.classList.add('pcObj-01on');
          pcObj01sub.classList.remove('pcObj-01off');
          pcObj02.classList.remove('pcObj-02on');
          pcObj02.classList.add('pcObj-02off');
          pcObj02sub.classList.add('pcObj-02on');
          pcObj02sub.classList.remove('pcObj-02off');
          pcObj03.classList.remove('pcObj-03on');
          pcObj03.classList.add('pcObj-03off');
          pcObj03sub.classList.add('pcObj-03on');
          pcObj03sub.classList.remove('pcObj-03off');
          pcObj04.classList.remove('pcObj-04on');
          pcObj04.classList.add('pcObj-04off');
          pcObj04sub.classList.add('pcObj-04on');
          pcObj04sub.classList.remove('pcObj-04off');
          pcObj05.classList.remove('pcObj-05on');
          pcObj05.classList.add('pcObj-05off');
          pcObj05sub.classList.add('pcObj-05on');
          pcObj05sub.classList.remove('pcObj-05off');
          // slideMoveLineup()
        }else if(changePnt_sec_fire > 0){
          pcObj01.classList.add('pcObj-01on');
          pcObj01.classList.remove('pcObj-01off');
          pcObj01sub.classList.remove('pcObj-01on');
          pcObj01sub.classList.add('pcObj-01off');
          pcObj02.classList.add('pcObj-02on');
          pcObj02.classList.remove('pcObj-02off');
          pcObj02sub.classList.remove('pcObj-02on');
          pcObj02sub.classList.add('pcObj-02off');
          pcObj03.classList.add('pcObj-03on');
          pcObj03.classList.remove('pcObj-03off');
          pcObj03sub.classList.remove('pcObj-03on');
          pcObj03sub.classList.add('pcObj-03off');
          pcObj04.classList.add('pcObj-04on');
          pcObj04.classList.remove('pcObj-04off');
          pcObj04sub.classList.remove('pcObj-04on');
          pcObj04sub.classList.add('pcObj-04off');
          pcObj05.classList.add('pcObj-05on');
          pcObj05.classList.remove('pcObj-05off');
          pcObj05sub.classList.remove('pcObj-05on');
          pcObj05sub.classList.add('pcObj-05off');
          yellowWall.classList.remove('coverUp-y');
        }

        // 背景変更（GreenFist → Yellow、Yellow → GreenFist）
        if(changePnt_trd_fire <= 0){
          yellowWall.classList.add('coverUpUp-y');
          // slideMoveLineupSec()
          
        }else if(changePnt_trd_fire > 0 && changePnt_trd_fire < 4000){
          // greenWallSec.classList.add('coverUp-gSec');
          
          yellowWall.classList.remove('coverUpUp-y');
        }

        // 背景変更（Yellow → GreenSec、Yellow → GreenSec）
        if(changePnt_trd_fire <= 0){
          greenWallSec.classList.add('coverUp-gSec');
          
        }else if(changePnt_trd_fire > 0 && changePnt_trd_fire < 4000){
          
          // greenWallSec.classList.add('coverUp-gSec');
          greenWallSec.classList.remove('coverUp-gSec');
        }

        // 背景変更（Yellow → White、White → Yellow）
        if(changePnt_fth_fire <= 0){
          whiteWall.classList.add('coverUp-w');
          // slideMoveFeature()
          black.style.display = "block";
          white.style.display = "none";
          pcLogoOn.classList.add('pcLogo-on');
          pcLogoOn.classList.remove('pcLogo-off');
          pcLogoOff.classList.remove('pcLogo-on');
          pcLogoOff.classList.add('pcLogo-off');

          pcObj01.classList.remove('pcObj-01on');
          pcObj01.classList.add('pcObj-01off');
          pcObj01sub.classList.add('pcObj-01on');
          pcObj01sub.classList.remove('pcObj-01off');
          pcObj02.classList.remove('pcObj-02on');
          pcObj02.classList.add('pcObj-02off');
          pcObj02sub.classList.add('pcObj-02on');
          pcObj02sub.classList.remove('pcObj-02off');
          pcObj03.classList.remove('pcObj-03on');
          pcObj03.classList.add('pcObj-03off');
          pcObj03sub.classList.add('pcObj-03on');
          pcObj03sub.classList.remove('pcObj-03off');
          pcObj04.classList.remove('pcObj-04on');
          pcObj04.classList.add('pcObj-04off');
          pcObj04sub.classList.add('pcObj-04on');
          pcObj04sub.classList.remove('pcObj-04off');
          pcObj05.classList.remove('pcObj-05on');
          pcObj05.classList.add('pcObj-05off');
          pcObj05sub.classList.add('pcObj-05on');
          pcObj05sub.classList.remove('pcObj-05off');
        }else if(changePnt_fth_fire > 0 && changePnt_fth_fire < 2000){
          whiteWall.classList.remove('coverUp-w');
          black.style.display = "none";
          white.style.display = "block";
          pcLogoOn.classList.add('pcLogo-off');
          pcLogoOn.classList.remove('pcLogo-on');
          pcLogoOff.classList.remove('pcLogo-off');
          pcLogoOff.classList.add('pcLogo-on');

          pcObj01.classList.add('pcObj-01on');
          pcObj01.classList.remove('pcObj-01off');
          pcObj01sub.classList.remove('pcObj-01on');
          pcObj01sub.classList.add('pcObj-01off');
          pcObj02.classList.add('pcObj-02on');
          pcObj02.classList.remove('pcObj-02off');
          pcObj02sub.classList.remove('pcObj-02on');
          pcObj02sub.classList.add('pcObj-02off');
          pcObj03.classList.add('pcObj-03on');
          pcObj03.classList.remove('pcObj-03off');
          pcObj03sub.classList.remove('pcObj-03on');
          pcObj03sub.classList.add('pcObj-03off');
          pcObj04.classList.add('pcObj-04on');
          pcObj04.classList.remove('pcObj-04off');
          pcObj04sub.classList.remove('pcObj-04on');
          pcObj04sub.classList.add('pcObj-04off');
          pcObj05.classList.add('pcObj-05on');
          pcObj05.classList.remove('pcObj-05off');
          pcObj05sub.classList.remove('pcObj-05on');
          pcObj05sub.classList.add('pcObj-05off');
        }

        if(elemZoom_fire <= 800){
          zoomAction()
        }else if(elemZoom_fire > -100 && elemZoom_fire < -50){
          flug = false;
          return flug;
        }

        if(elemZoomSec_fire <= 800){
          zoomActionSec()
        }else if(elemZoomSec_fire > -100 && elemZoomSec_fire < -50){
          flug = false;
          return flug;
        }


        //▼▼▼　ボタンボーダースライド　▼▼▼
        var itemBtns = document.querySelectorAll('.itemlist-btn');
        var itemImgBorder = document.querySelectorAll('.itemlist-img');
        var itemBtnsArr = Array.prototype.slice.call(itemBtns);
        var itemImgArr = Array.prototype.slice.call(itemImgBorder);
        // console.log(itemBtnsArr);
        for ( var i = 0;  i < 7;  i++ ) {
          var btns = itemBtnsArr[i].getBoundingClientRect().bottom - window.innerHeight;
          if(btns < -50){
            // console.log(test + " " + i);
            itemBtnsArr[i].classList.add('itemlist-btn2');
          }
          var imgs = itemImgArr[i].getBoundingClientRect().bottom - window.innerHeight;
            if(imgs < -40){
              // console.log(test + " " + i);
              itemImgArr[i].classList.add('img-border');
            }
         }
        //▲▲▲　ボタンボーダースライド　▲▲▲

        // ↑↑↑ 各処理記述 ↑↑↑
        flug = true;
        return flug;
      },300);
    }
  });

  //▼▼▼　LINEUP 画像拡大　▼▼▼
  function zoomAction(){
    // console.log(elemZoom_fire);
    var flug = true;
    document.addEventListener('scroll', function(){
      if(flug){
        flug = false;
        setTimeout(function(){
          //変数定義
          var elemZoom_fire = elemZoomSec.getBoundingClientRect().top;
          var scrollY = window.scrollY/15;
          // console.log(scrollY);
          if(scrollY > 45 && scrollY < 80){
            elemZoom.style.width = scrollY + '%';
          }else if(scrollY >= 80){
            elemZoom.style.width = '80%';
          }

          flug = true;
          return flug;
        },);
      }
    },false);
  }
  //▲▲▲　LINEUP 画像拡大　▲▲▲

  //▼▼▼　FEATURE 画像拡大　▼▼▼
  function zoomActionSec(){
    var flug = true;
    document.addEventListener('scroll', function(){
      if(flug){
        flug = false;
        setTimeout(function(){
          //変数定義
          var scrollY = window.scrollY/15;
          if(scrollY > 450 && scrollY < 500){
            elemZoomSec.style.width = scrollY - 400 + '%';
          }else if(scrollY >= 500){
            elemZoomSec.style.width = '100%';
          }

          flug = true;
          return flug;
        },);
      }
    },false);
  }
  //▲▲▲　FEATURE 画像拡大　▲▲▲
},false);



//▼▼▼　ハンバーガーメニュー　▼▼▼
$('.header__navBox ,.navigation__item').click(function(){
  $('.navigation__nav').toggleClass('humbOn');
  if($('.navigation__nav').hasClass('humbOn')){
    $('.navigation__nav-txt').css('color','#000');
  }else{
    $('.navigation__nav-txt').css('color','#000');
  }

  if($('.menu-open').hasClass('on')){
    $('.menu-open').toggleClass('on off');
    $('.menu-close').toggleClass('off on');
  }else{
    $('.menu-open').toggleClass('off on');
    $('.menu-close').toggleClass('on off');
  }
  $('.header__nav-icon').toggleClass('rotate-move');
});

//▲▲▲　ハンバーガーメニュー　▲▲▲




var flug = true;
document.addEventListener('scroll', function(){
  if(flug){
    flug = false;
    setTimeout(function(){
      //変数定義


      //▼▼▼　ボタンボーダースライド　▼▼▼
      var itemBtns = document.querySelectorAll('.itemlist-btn');
      var itemImgBorder = document.querySelectorAll('.itemlist-img');
      var itemBtnsArr = Array.prototype.slice.call(itemBtns);
      var itemImgArr = Array.prototype.slice.call(itemImgBorder);
      // console.log(itemBtnsArr);
      for ( var i = 0;  i < 7;  i++ ) {
        var btns = itemBtnsArr[i].getBoundingClientRect().bottom - window.innerHeight;
        if(btns < -50){
          // console.log(test + " " + i);
          itemBtnsArr[i].classList.add('itemlist-btn2');
        }
        var imgs = itemImgArr[i].getBoundingClientRect().bottom - window.innerHeight;
        if(imgs < -40){
          // console.log(test + " " + i);
          itemImgArr[i].classList.add('img-border');
        }
      }
      
      //▲▲▲　ボタンボーダースライド　▲▲▲

      // ↑↑↑ 各処理記述 ↑↑↑
      flug = true;
      return flug;
    },300);
  }
});