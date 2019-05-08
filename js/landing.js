$(function() {
  $('.landing .supported-codes').on('click', function() {
    $('.landing .nav-takeover').slideDown();
  });

  $('.landing .nav-takeover-close').on('click', function() {
    $('.landing .nav-takeover').slideUp();
  });

  $(document).on('keyup', function(e) {
    if (e.which == 27) {
      $('.landing .nav-takeover').slideUp();
    }
  });
});