$(function() {
  
  //ヘッダーをaboutセクションから固定する
  
  let headerShow = () => {
    let AboutPos = $(".mainvisual").offset().top;
    let mainvisualHeight = $(".mainvisual").outerHeight();
    let checkPos = AboutPos + mainvisualHeight;
    let currentPos = $(this).scrollTop();
    
    if((window.matchMedia("(min-width: 769px)").matches)) {
      if(currentPos > checkPos) {
        $(".fix-header").addClass("show");
        $(".return-btn").addClass("show");
      }else {
        $(".fix-header").removeClass("show");
        $(".return-btn").removeClass("show");
      }
    }
  }

  //bgが画面の下に来ると表示する

  let bgShow = () => {
    $(".bg").css("background-color, #FFF");
    let bgPos = $(".bg").offset().top;
    let bgHeight = $(".bg").outerHeight();
    let  windowHeight = $(window).height();
    let checkTop = bgPos - windowHeight - 50;
    let checkBottom =  checkTop + bgHeight + windowHeight;
    let currentPos = $(this).scrollTop();
    if(checkTop < currentPos && checkBottom > currentPos) {
      $(".bg").addClass("show");
    }else {
      $(".bg").removeClass("show");
    }
  }
  $(window).on("load resize", () => {
    headerShow();
    bgShow();
  });
  
  $(window).on("scroll", () => {
    headerShow();
    bgShow();
  });

  //リンクをクリックするとそのセクションまでスクロールする

  $("a[href^='#']").on("click", (e) => {
    let ajust = 0;
    let speed = 400;
    let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let pos = target.offset().top + ajust;
    $("body, html").animate({scrollTop:pos}, speed, 'swing');
    return false;

  });

  //メニューを開閉(SP) 

  $(".sp-open-btn").on("click", () => {
    $(".sp-menu").addClass("active");
  });

  $(".sp-close-btn").on("click", () => {
    $(".sp-menu").removeClass("active");
  });

  //メニューリンクをクリックすると閉じる
    $(".sp-menu-item").children("a").on("click", () => {
      $(".sp-menu").removeClass("active");
    });
  /*メインビジュアルのスライダー設定*/

  $(".mainvisual-list").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow:1,
    centerMode: true,
    centerPadding: '10%',
    speed: 700,
    arrows: false,
    draggable: false,
    pauseOnHover:false,
  })

});