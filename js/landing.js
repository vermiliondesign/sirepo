$(function() {
  $('.landing .supported-codes').on('click', function() {
    $('.landing .nav-takeover').removeClass('hidden');
  });

  $('.landing .nav-takeover-close').on('click', function() {
    $('.landing .nav-takeover').addClass('hidden');
  });
});