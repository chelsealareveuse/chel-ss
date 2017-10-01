$(document).ready(function(){
    
    $(".menu h1").hover(function(){
        $("#header").toggleClass("light");
    });
    
    $("#scroll a").click(function(e) {
        e.preventDefault();
      
        $("body").animate({scrollTop: $($(this).attr('href')).offset().top}, 1000, 'swing');
   
    });
    
});




            
            $(window).ready(function() {
                
                
                
                $("#content img").click(function() {
                    
                    var photo = $(this).attr("src");
                    
                    $("#cover").fadeIn();
                
                    $("#photo-modal").fadeIn(2000);
                    
                    $("#photo-modal img").attr("src", photo);
                    
                });
                
                
    $(".photo").click(function() {
                    
    var cap = $(this).find(".cap").html();
        
    $("#caption").append(cap);
        
    $("#caption-2").append(cap);    
        
    var capHeight = $("#photo-modal img").css("height"); 
    
    $("#caption").css({height: capHeight});
    });
                
                
                
                $("#photo-modal").click(function() {
                    $("#cover").hide();
                    $("#photo-modal").hide();
                    location.reload();
                });
                
            });