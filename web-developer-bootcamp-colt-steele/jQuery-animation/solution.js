$("button").on("click", function(){
  $("div").fadeOut(1000, function(){                //div elements still in HTML after fadeOut
    console.log("fade completed");                  //executes after 1sec fadeOut
    $("this").remove();                             //removes div elements from HTML & DOM
  });
    console.log("next js line directly executed");  //directly executed
});

/*
.fadeIn();
.fadeToggle();        //fadeIn toggleEvent fadeOut
.slideIn
.slideOut
.slideDown
.slideUp
*/
