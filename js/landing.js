$(function() {
  $('.supported-codes').on('click', function() {
    $('.nav-takeover').removeClass('hidden');
  });

  $('.nav-takeover-close').on('click', function() {
    $('.nav-takeover').addClass('hidden');
  });
});