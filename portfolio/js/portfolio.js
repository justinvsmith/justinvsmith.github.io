$(document).ready(function(){

    $("#open").click(function(){
        openNav();
    })
    
    $(".closebtn").click(function(){
        closeNav();
    })
    
    function openNav() {
        $(".nav").css("width", "250px")
        
        $(".main").css("margin-left", "250px");
        
        $("body").css("background-color", "rgba(0,0,0,0.4)")
    };
    
    function closeNav() {
        
        $(".nav").css("width", "0")
        
        $(".main").css("margin-left", "0");
        
        $("body").css("background-color", "#ffffff");
    }  


})