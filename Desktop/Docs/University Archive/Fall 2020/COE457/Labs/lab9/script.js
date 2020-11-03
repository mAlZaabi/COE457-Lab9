$(document).ready(function(){

    var multiplier = 1;

    $( '#btn1' ).click(function(){


        var fontSize = parseInt($("body").css("font-size"));
        fontSize = fontSize *2 + "px";
        multiplier *=2;
        $("body").css({'font-size':fontSize});

    });

    $( '#btn2' ).click(function(){

        $("body").css({'font-family':'"Comic Sans MS", cursive, sans-serif'});
        $("p").css({'font-family':'"Comic Sans MS", cursive, sans-serif'});
        $("h1").css({'font-family':'"Comic Sans MS", cursive, sans-serif'});
        $("h2").css({'font-family':'"Comic Sans MS", cursive, sans-serif'});
        $("li").css({'font-family':'"Comic Sans MS", cursive, sans-serif'});
    });

    $( '#btn3' ).click(function(){

        var fontSize = parseInt($("body").css("font-size"));
        fontSize = fontSize / multiplier + "px";
        $("body").css({'font-size':fontSize});
        multiplier = 1;

    });

    $( '.phones' ).click(function(){

        $('.phones').hide();

    });


    $( '#floatingleft' ).click(function(){

        let width = parseInt($('#floatingleft').css("width"));
        console.log(width);
        width = width - 5 + "px";
        $("#floatingleft").css({'width':width});
    });



})


