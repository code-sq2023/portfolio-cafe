$(function() {

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