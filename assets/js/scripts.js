$(document).ready(function() {
  $("nav").sticky({
    topSpacing: 0
  });
  $('body').scrollspy({
    target: 'nav',
    offset: 80
  });

  $('.scrollto').on('click', function(e) {

    //store hash
    var target = this.hash;

    e.preventDefault();

    $('body').scrollTo(target, 800, {
      offset: -60,
      'axis': 'y'
    });

  });

//   $(".cards").click(function() {
//   window.open($(this).find("a").attr("href"));
//   return false;
// });

});
