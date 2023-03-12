$(function() {
  
  //ヘッダーを途中から固定する
  let AboutPos = $(".mainvisual").offset().top;
  let mainvisualHeight = $(".mainvisual").outerHeight();
  let referencePos = AboutPos + (mainvisualHeight / 4);
  $(window).on("scroll", () => {
    let currentPos = $(this).scrollTop();
    if(currentPos > referencePos) {
      $(".fix-header").addClass("show");
      $(".return-btn").addClass("show");
    }else {
      $(".fix-header").removeClass("show");
      $(".return-btn").removeClass("show");
    }
  });

  //リンクをクリックするとそのセクショントップまでスクロースする

  $("a[href^='#']").on("click", (e) => {
    let ajust = 0;
    let speed = 400;
    let href = $(e.currentTarget).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let pos = target.offset().top + ajust;
    $("body, html").animate({scrollTop:pos}, speed, 'swing');
    return false;

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