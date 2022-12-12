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

window.onload = function() {
    page1();
}

function page1(){
    //1-7
    x =document.getElementsByClassName("pg1").style.display = "block";
    document.getElementById("sensorama").style.display ="block";
    y =document.getElementsByClassName("pg2").style.display = "none";
    document.getElementById("nasa").style.display ="none";
    z =document.getElementsByClassName("pg3").style.display = "none";
    document.getElementById("vr90s").style.display ="none";
    w =document.getElementsByClassName("pg4").style.display = "none";
}
function page2(){
    //8-12
    x =document.getElementsByClassName("pg1").style.display = "none";
    document.getElementById("sensorama").style.display ="none";
    y =document.getElementsByClassName("pg2").style.display = "block";
    document.getElementById("nasa").style.display ="block";
    z =document.getElementsByClassName("pg3").style.display = "none";
    document.getElementById("vr90s").style.display ="none";
    w =document.getElementsByClassName("pg4").style.display = "none";
}
function page3(){
    //13-17
    x =document.getElementsByClassName("pg1").style.display = "none";
    document.getElementById("sensorama").style.display ="none";
    y =document.getElementsByClassName("pg2").style.display = "none";
    document.getElementById("nasa").style.display ="none";
    z =document.getElementsByClassName("pg3").style.display = "block";
    document.getElementById("vr90s").style.display ="block";
    w =document.getElementsByClassName("pg4").style.display = "none";
}
function page4(){
    //18-22
    x =document.getElementsByClassName("pg1").style.display = "none";
    document.getElementById("sensorama").style.display ="none";
    y =document.getElementsByClassName("pg2").style.display = "none";
    document.getElementById("nasa").style.display ="none";
    z =document.getElementsByClassName("pg3").style.display = "none";
    document.getElementById("vr90s").style.display ="none";
    w =document.getElementsByClassName("pg4").style.display = "block";
}
