$(function() {
  if ($('body').hasClass('landing')) {
    $('.landing .supported-codes').on('click', function(e) {
      e.preventDefault();
      $('.landing .nav-takeover').addClass('active');
      $('body').css('overflow', 'hidden');
    });

    $('.landing .nav-takeover-close').on('click', function(e) {
      e.preventDefault();
      $('.landing .nav-takeover').removeClass('active');
      $('body').css('overflow', 'auto');
    });

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

      $('.get-started-next').on('click', function() {
        if (current_step < steps) {
          current_step++;
          step_transition();
        }
      });

      $('.get-started-prev').on('click', function() {
        if (current_step > 1) {
          current_step--;
          step_transition();
        }
      });

      $('.get-started-step-icon').on('click', function() {
        current_step = $(this).attr('data-step')
        step_transition();
      })

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

      step_transition(current_step);

      var resize_steps = function() {
        var max_height = 0;
        $('.get-started-step').each(function(i, step) {
          if ($(step).outerHeight() > max_height) {
            max_height = $(step).outerHeight();
          }

          $('.get-started-steps').height(max_height);
        })
      }

      $(window).on('resize', resize_steps);

      resize_steps();
    }


  }
});