$(function() {
  if ($('body').hasClass('landing')) {
    // Show dropdown menu on Supported Codes click
    $('.landing .supported-codes').on('click', function(e) {
      e.preventDefault();
      $('.landing .nav-takeover').addClass('active');
      $('body').css('overflow', 'hidden');
    });

    // Close dropdown menu on close click
    $('.landing .nav-takeover-close').on('click', function(e) {
      e.preventDefault();
      $('.landing .nav-takeover').removeClass('active');
      $('body').css('overflow', 'auto');
    });

    // Close dropdown menu on escape
    $(document).on('keyup', function(e) {
      if (e.which == 27) {
        $('.landing .nav-takeover').removeClass('active');
        $('body').css('overflow', 'auto');
      }
    });

    // Slider
    if ($('.get-started').length > 0) {
      var steps = 4;
      var current_step = 1;

      // Calculate where the steps should be
      var step_transition = function() {
        $('.get-started-step-images').css('transform', 'translateX(' + (100 * current_step - 100) / -4 + '%)');

        $('.get-started-step-icon, .get-started-step').removeClass('active');
        $('.get-started-step-icon[data-step="' + current_step + '"], .get-started-step[data-step="' + current_step + '"]').addClass('active');

        $('.get-started-next, .get-started-prev').removeClass('hidden');

        if (current_step === steps) {
          $('.get-started-next').addClass('hidden');
        }

        if (current_step === 1) {
          $('.get-started-prev').addClass('hidden');
        }
      }

      // Next click
      $('.get-started-next').on('click', function() {
        if (current_step < steps) {
          current_step++;
          step_transition();
        }
      });

      // Prev click
      $('.get-started-prev').on('click', function() {
        if (current_step > 1) {
          current_step--;
          step_transition();
        }
      });

      // Icon click
      $('.get-started-step-icon').on('click', function() {
        current_step = $(this).attr('data-step')
        step_transition();
      })

      // Left or right arrows
      $(document).on('keyup', function(e) {
        switch(e.which) {
          case 37: // left
            e.preventDefault();
            if (current_step > 1) {
              current_step--;
              step_transition();
            }
            break;

          case 39: // right
            e.preventDefault();
            if (current_step < steps) {
              current_step--;
              step_transition();
            }
            break;
        }
      });

      // Initial Step
      step_transition(current_step);

      // Size step copy since they're position absolute
      var resize_steps = function() {
        var max_height = 0;
        $('.get-started-step').each(function(i, step) {
          if ($(step).outerHeight() > max_height) {
            max_height = $(step).outerHeight();
          }

          $('.get-started-steps').height(max_height);
        })
      }

      // Simple resizing of step copy on window resize with throttle
      var step_resize_timeout = null;
      $(window).on('resize', function() {
        clearTimeout(step_resize_timeout);
        step_resize_timeout = setTimeout(resize_steps, 100);
      });

      resize_steps();
    }
  }
});