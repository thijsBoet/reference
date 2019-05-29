var heading = {
    color : "red",
    background : "steelblue",
    border : "2px solid navy"
};

var listItems = {
    fontSize:"10px",
    border:"3px dashed purple",
    background:"rgba(89,45,20,.5)"
};


$("h1").html("<a href='https://api.jquery.com'>jQuery Methods Demo Page</a>");
$("h1").css(heading);

$("ul:last-of-type li").css(listItems);
$("ul:first-of-type li").html("<li>I hacked your ul</li><li>Rusty is still adorable</li>");


$("div:first-of-type").css("color", "pink");
$("div").css("background", "purple");
$("div#third").css("border", "2px solid orange");
$(".highlight").css("width", "200px");

$("a").css("font-size", "40px");

$("img").css("width","200px");
$("img:first-of-type").attr("src","https://farm3.static.flickr.com/2085/2177060015_258bcfaff9_m.jpg");
$("img").last().attr("src","https://yt3.ggpht.com/a-/AJLlDp0TFaxkKTbr1YMaEdj0KOLllMoFJcuWOIm4XA=s900-mo-c-c0xffffffff-rj-k-no");

$("input").attr("type", "color");
$("input").val();
$("option").val();

$("#first").addClass("correct");
$("#second").addClass("correct");
$("#second").removeClass("correct");
$("#second").addClass("wrong");

$("#third").toggleClass("done");



