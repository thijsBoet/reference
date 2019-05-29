$("h1").on("click", function(){
    $(this).css("color", "steelblue");
});

$("button").click(function(){
    var text = $(this).text();
    alert(text);
    $(this).css("background", "red");
});

$("#input1").keypress(function(event){
    if(event.which === 13){
        alert("You hit enter");
    }
});

$("#input2").on("keypress", function(){
    console.log("pressed");
});

$("#btn4").on("mouseenter", function (){
    $("#btn4").css("font-weight", "bold");
});

$("#btn4").on("mouseleave", function (){
    $("#btn4").css("font-weight", "normal");
});