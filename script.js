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

function page1(){
    //1-7
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display ="block";
    document.getElementById("sensorama").style.display ="block";
    document.getElementById("4").style.display ="block";
    document.getElementById("5").style.display ="block";
    document.getElementById("6").style.display ="block";
    document.getElementById("7").style.display ="block";
    document.getElementById("8").style.display ="none";
    document.getElementById("nasa").style.display ="none";
    document.getElementById("10").style.display ="none";
    document.getElementById("11").style.display = "none";
    document.getElementById("12").style.display ="none";
    document.getElementById("13").style.display ="none";
    document.getElementById("14").style.display ="none";
    document.getElementById("vr90s").style.display ="none";
    document.getElementById("16").style.display ="none";
    document.getElementById("17").style.display ="none";
    document.getElementById("18").style.display ="none";
    document.getElementById("19").style.display ="none";
    document.getElementById("20").style.display ="none";
    document.getElementById("21").style.display ="none";
    document.getElementById("22").style.display ="none";
}
Window.onload=page1();
function page2(){
    //8-12
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display ="none";
    document.getElementById("sensorama").style.display ="none";
    document.getElementById("4").style.display ="none";
    document.getElementById("5").style.display ="none";
    document.getElementById("6").style.display ="none";
    document.getElementById("7").style.display ="none";
    document.getElementById("8").style.display ="block";
    document.getElementById("nasa").style.display ="block";
    document.getElementById("10").style.display ="block";
    document.getElementById("11").style.display = "block";
    document.getElementById("12").style.display ="block";
    document.getElementById("13").style.display ="none";
    document.getElementById("14").style.display ="none";
    document.getElementById("vr90s").style.display ="none";
    document.getElementById("16").style.display ="none";
    document.getElementById("17").style.display ="none";
    document.getElementById("18").style.display ="none";
    document.getElementById("19").style.display ="none";
    document.getElementById("20").style.display ="none";
    document.getElementById("21").style.display ="none";
    document.getElementById("22").style.display ="none";
}
function page3(){
    //13-17
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display ="none";
    document.getElementById("sensorama").style.display ="none";
    document.getElementById("4").style.display ="none";
    document.getElementById("5").style.display ="none";
    document.getElementById("6").style.display ="none";
    document.getElementById("7").style.display ="none";
    document.getElementById("8").style.display ="none";
    document.getElementById("nasa").style.display ="none";
    document.getElementById("10").style.display ="none";
    document.getElementById("11").style.display = "none";
    document.getElementById("12").style.display ="none";
    document.getElementById("13").style.display ="block";
    document.getElementById("14").style.display ="block";
    document.getElementById("vr90s").style.display ="block";
    document.getElementById("16").style.display ="block";
    document.getElementById("17").style.display ="block";
    document.getElementById("18").style.display ="none";
    document.getElementById("19").style.display ="none";
    document.getElementById("20").style.display ="none";
    document.getElementById("21").style.display ="none";
    document.getElementById("22").style.display ="none";
}
function page4(){
    //18-22
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display ="none";
    document.getElementById("sensorama").style.display ="none";
    document.getElementById("4").style.display ="none";
    document.getElementById("5").style.display ="none";
    document.getElementById("6").style.display ="none";
    document.getElementById("7").style.display ="none";
    document.getElementById("8").style.display ="none";
    document.getElementById("nasa").style.display ="none";
    document.getElementById("10").style.display ="none";
    document.getElementById("11").style.display = "none";
    document.getElementById("12").style.display ="none";
    document.getElementById("13").style.display ="none";
    document.getElementById("14").style.display ="none";
    document.getElementById("vr90s").style.display ="none";
    document.getElementById("16").style.display ="none";
    document.getElementById("17").style.display ="none";
    document.getElementById("18").style.display ="none";
    document.getElementById("19").style.display ="block";
    document.getElementById("20").style.display ="block";
    document.getElementById("21").style.display ="block";
    document.getElementById("22").style.display ="block";
}
