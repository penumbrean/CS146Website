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
