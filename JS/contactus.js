// Name: Vijay Prakash Mudaliar
// Student Id: 8962818

"use strict";

$(document).ready(function() {

    $('.image-container img').click(function() {
        var $img = $(this);
        var originalWidth = $img.width();
        $img.animate({ width: '450px' }, 300, function() {
          $img.animate({ width: originalWidth }, 300);
        });
      });

    $('#contactForm').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter a message"
            }
        },
        errorPlacement: function(error, element) {
            error.appendTo(element.parent().find('.required'));
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
    function updateDateTime() {
        var now = new Date();
        var dateTimeString = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        $('#datetime').text(dateTimeString);
    }

    // Update date and time initially
    updateDateTime();

    // Update date and time every second
    setInterval(updateDateTime, 1000);

});


