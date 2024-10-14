$(function() {
  //ローディングアニメーションを非表示にする
 
$(window).on("load", () => {
  setTimeout(() => {
    $(".loading").addClass("loaded");
  }, 1800)
});

  //ヘッダーを固定する
  
  let headerShow = () => {
    if(location.href == "https://localhost:5500/index.html"){
    let targetPos = $(".mainvisual").offset().top;
    let targetHeight = $(".mainvisual").outerHeight();
    let checkPos = targetPos + targetHeight;
    let currentPos = $(this).scrollTop();
    header_btn_show(checkPos, currentPos);
  }else {
    let checkPos = 80;
    let currentPos = $(this).scrollTop();
    header_btn_show(checkPos, currentPos);
    }
    
  }
  
  function header_btn_show(checkPos, currentPos) {
    if(currentPos > checkPos) {
      $(".fix-header").addClass("show");
      $(".return-btn").addClass("show");
    }else {
      $(".fix-header").removeClass("show");
      $(".return-btn").removeClass("show");
    }
  }

  $(window).on("load resize", () => {
    headerShow();
  });
  
  $(window).on("scroll", () => {
    headerShow();
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

