$(function(){
    var $registerForm = $("#register");

    $registerForm.validate({
        rules:{
            username:{
                required:true
            }
        },
        messages:{
            username:{
                required:'Username must be required!'
            }
        }
    });

    // Bind the form submission event and prevent the default submission behavior
    $registerForm.on('submit', function (e) {
        if (!$registerForm.valid()) {
            // If the form is not valid, prevent submission
            e.preventDefault();
        }
    });
});
