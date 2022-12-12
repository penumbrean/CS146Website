///* global document */
//
$(function() {
    $("#name1").click(function() {
        $("#wwa1").fadeToggle();
    });
    
    $("#name2").click(function() {
        $("#wwa2").fadeToggle();
    });
    
    $("#name3").click(function() {
        $("#wwa3").fadeToggle();
    });
    
    $("#name4").click(function() {
        $("#wwa4").fadeToggle();
    });
    
    $("#sensorama").hover(function () {
        $(".sensoramaText").fadeToggle();
        $(".sensoramaText").text("The syn-aesthetic, immersive machine developed by Heilig in 1962 widened the Expanded Cinema to a theater of total illusion, which Heilig called the «experience theater.»"); 
        //http://www.medienkunstnetz.de/works/sensorama/
    });
    
    $("#nasa").hover(function () {
        $(".nasaText").fadeToggle();
        $(".nasaText").text("The Virtual Interface Environment Workstation (VIEW), 1990"); 
    });
    
    $("#vr90s").hover(function () {
        $(".vr90sText").fadeToggle();
        $(".vr90sText").text("Virtual reality equipment and games from the beginning of the 1990's."); 
    });
});

var p1 = document.getElementsByClassName("pg1");
var p2 = document.getElementsByClassName("pg2");
var p3 = document.getElementsByClassName("pg3");
var p4 = document.getElementsByClassName("pg4");

window.onload = function() {
    page1();
}

function page1(){
    //1-7
    for(var i = 0; i < p1.length; i++) p1[i].style.display = "block";
    for(var i = 0; i < p2.length; i++) p2[i].style.display = "none";
    for(var i = 0; i < p3.length; i++) p3[i].style.display = "none";
    for(var i = 0; i < p4.length; i++) p4[i].style.display = "none";
}
function page2(){
    //8-12
    for(var i = 0; i < p1.length; i++) p1[i].style.display = "none";
    for(var i = 0; i < p2.length; i++) p2[i].style.display = "block";
    for(var i = 0; i < p3.length; i++) p3[i].style.display = "none";
    for(var i = 0; i < p4.length; i++) p4[i].style.display = "none";
}
function page3(){
    //13-17
    for(var i = 0; i < p1.length; i++) p1[i].style.display = "none";
    for(var i = 0; i < p2.length; i++) p2[i].style.display = "none";
    for(var i = 0; i < p3.length; i++) p3[i].style.display = "block";
    for(var i = 0; i < p4.length; i++) p4[i].style.display = "none";
}
function page4(){
    //18-22
    for(var i = 0; i < p1.length; i++) p1[i].style.display = "none";
    for(var i = 0; i < p2.length; i++) p2[i].style.display = "none";
    for(var i = 0; i < p3.length; i++) p3[i].style.display = "none";
    for(var i = 0; i < p4.length; i++) p4[i].style.display = "block";
}
