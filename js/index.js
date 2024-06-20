$(function () {
  var navbarHeight = 60;
  $('.agenda').on('click', function (e) {
    var offsetTop = $('#agenda').offset().top;
    e.preventDefault();
    $('html, body')
    .stop()
    .animate({ scrollTop: offsetTop - navbarHeight }, 500);
  });

  $('.partner').on('click', function (e) {
    var offsetTop = $('#partner').offset().top;
    e.preventDefault();
    $('html, body')
      .stop()
      .animate({ scrollTop: offsetTop - navbarHeight }, 500);
  });

  $('.about').on('click', function (e) {
    var offsetTop = $('#about').offset().top;
    e.preventDefault();
    $('html, body')
      .stop()
      .animate({ scrollTop: offsetTop - navbarHeight }, 500);
  });
});
