$(document).ready(function(){
    // open login modal
    $('#login-btn').on('click', function(e){
        e.preventDefault();
        $('#login-modal').modal('show');
        $(".register-wrapper").hide();
    });
    // show register wrapper
    $('#go-signup').on('click', function(e){
        e.preventDefault();
        $(".login-wrapper").hide();
        $(".register-wrapper").show();

    });
    // show login    wrapper
    $('#go-signin').on('click', function(e){
        e.preventDefault();
        $(".register-wrapper").hide();
        $(".login-wrapper").show();
    });

});