$(function() {
  //ローディングアニメーションを非表示にする
 
$(window).on("load", () => {
  setTimeout(() => {
    $(".loading").addClass("loaded");
  }, 1800)
});

  //戻るボタンを表示する
  
  let returnBtn_Show = () => {
    const checkPos = 80;
    let currentPos = $(this).scrollTop();
    showPosition(checkPos, currentPos);
  }
  
  function showPosition(checkPos, currentPos) {
    if(currentPos > checkPos) {
      $(".return-btn").addClass("show");
    }else {
      $(".return-btn").removeClass("show");
    }
  }

  $(window).on("load", () => {
    returnBtn_Show();
  });
  
  $(window).on("scroll", () => {
    returnBtn_Show();
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
    centerPadding: '20%',
    speed: 700,
    arrows: false,
    draggable: false,
    pauseOnHover:false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
        }
      }
    ]
  });
});

