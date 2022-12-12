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
    document.getElementById("1").style.visibility = "visible";
    document.getElementById("2").style.visibility ="visible";
    document.getElementById("3").style.visibility ="visible";
    document.getElementById("4").style.visibility ="visible";
    document.getElementById("5").style.visibility ="visible";
    document.getElementById("6").style.visibility ="visible";
    document.getElementById("7").style.visibility ="visible";
    document.getElementById("8").style.visibility ="hidden";
    document.getElementById("9").style.visibility ="hidden";
    document.getElementById("10").style.visibility ="hidden";
    document.getElementById("11").style.visibility = "hidden";
    document.getElementById("12").style.visibility ="hidden";
    document.getElementById("13").style.visibility ="hidden";
    document.getElementById("14").style.visibility ="hidden";
    document.getElementById("15").style.visibility ="hidden";
    document.getElementById("16").style.visibility ="hidden";
    document.getElementById("17").style.visibility ="hidden";
    document.getElementById("18").style.visibility ="hidden";
    document.getElementById("19").style.visibility ="hidden";
    document.getElementById("20").style.visibility ="hidden";
    document.getElementById("21").style.visibility ="hidden";
    document.getElementById("22").style.visibility ="hidden";
}

function page2(){
    //8-12
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility ="hidden";
    document.getElementById("3").style.visibility ="hidden";
    document.getElementById("4").style.visibility ="hidden";
    document.getElementById("5").style.visibility ="hidden";
    document.getElementById("6").style.visibility ="hidden";
    document.getElementById("7").style.visibility ="hidden";
    document.getElementById("8").style.visibility ="visible";
    document.getElementById("9").style.visibility ="visible";
    document.getElementById("10").style.visibility ="visible";
    document.getElementById("11").style.visibility = "visible";
    document.getElementById("12").style.visibility ="visible";
    document.getElementById("13").style.visibility ="hidden";
    document.getElementById("14").style.visibility ="hidden";
    document.getElementById("15").style.visibility ="hidden";
    document.getElementById("16").style.visibility ="hidden";
    document.getElementById("17").style.visibility ="hidden";
    document.getElementById("18").style.visibility ="hidden";
    document.getElementById("19").style.visibility ="hidden";
    document.getElementById("20").style.visibility ="hidden";
    document.getElementById("21").style.visibility ="hidden";
    document.getElementById("22").style.visibility ="hidden";
}
function page3(){
    //13-17
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility ="hidden";
    document.getElementById("3").style.visibility ="hidden";
    document.getElementById("4").style.visibility ="hidden";
    document.getElementById("5").style.visibility ="hidden";
    document.getElementById("6").style.visibility ="hidden";
    document.getElementById("7").style.visibility ="hidden";
    document.getElementById("8").style.visibility ="hidden";
    document.getElementById("9").style.visibility ="hidden";
    document.getElementById("10").style.visibility ="hidden";
    document.getElementById("11").style.visibility = "hidden";
    document.getElementById("12").style.visibility ="hidden";
    document.getElementById("13").style.visibility ="visible";
    document.getElementById("14").style.visibility ="visible";
    document.getElementById("15").style.visibility ="visible";
    document.getElementById("16").style.visibility ="visible";
    document.getElementById("17").style.visibility ="visible";
    document.getElementById("18").style.visibility ="hidden";
    document.getElementById("19").style.visibility ="hidden";
    document.getElementById("20").style.visibility ="hidden";
    document.getElementById("21").style.visibility ="hidden";
    document.getElementById("22").style.visibility ="hidden";
}
function page4(){
    //18-22
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility ="hidden";
    document.getElementById("3").style.visibility ="hidden";
    document.getElementById("4").style.visibility ="hidden";
    document.getElementById("5").style.visibility ="hidden";
    document.getElementById("6").style.visibility ="hidden";
    document.getElementById("7").style.visibility ="hidden";
    document.getElementById("8").style.visibility ="hidden";
    document.getElementById("9").style.visibility ="hidden";
    document.getElementById("10").style.visibility ="hidden";
    document.getElementById("11").style.visibility = "hidden";
    document.getElementById("12").style.visibility ="hidden";
    document.getElementById("13").style.visibility ="hidden";
    document.getElementById("14").style.visibility ="hidden";
    document.getElementById("15").style.visibility ="hidden";
    document.getElementById("16").style.visibility ="hidden";
    document.getElementById("17").style.visibility ="hidden";
    document.getElementById("18").style.visibility ="hidden";
    document.getElementById("19").style.visibility ="visible";
    document.getElementById("20").style.visibility ="visible";
    document.getElementById("21").style.visibility ="visible";
    document.getElementById("22").style.visibility ="visible";
}
