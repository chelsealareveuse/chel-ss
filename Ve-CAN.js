$(document).ready(function(){
    
    $("#breakfast").hover(function(){
      $("#dropdown-1").css({visibility: "visible"});
    });
    
   $("#lunch").hover(function(){
      $("#dropdown-2").css({visibility: "visible"});
    });
    
    $("#dinner").hover(function(){
      $("#dropdown-3").css({visibility: "visible"});
    });
    
    $("#dessert").hover(function(){
      $("#dropdown-4").css({visibility: "visible"});
    });
    
    $("#snacks").hover(function(){
      $("#dropdown-5").css({visibility: "visible"});
    });
    
    $("#random").hover(function(){
      $("#dropdown-6").css({visibility: "visible"});
    });
    
    
    $("#main-heading").hover(function() {
        $(".drop-down").css({visibility: "hidden"});
    });
    
    $("#content").hover(function() {
        $(".drop-down").css({visibility: "hidden"});
    });

    
});