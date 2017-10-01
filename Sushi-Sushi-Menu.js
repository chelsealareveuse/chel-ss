$(window).ready(function() {
        
        $("#scroll a").click(function(e) {
        e.preventDefault();
      
        $("body").animate({scrollLeft: $($(this).attr('href')).offset().left}, 1000, 'swing');
   
    });
        
        
        $("#Chi").click(function(e) {
        e.preventDefault();
      
        $("body").animate({scrollLeft: $($(this).attr('href')).offset().left}, 1000, 'swing');
   
    });
        
        
        
        
      $(".flip-container").click(function(){
                   
                  
                   $(".flipper").toggleClass("flipping");
                   
                    });

    
    if ($(window).width() < 800) {
                    $(".front").click(function() {
                        $(".back").css({color: "white"});
                        $(".back a").css({color: "red"});
                        $("#back-title-1 h1").css({background: "white"});
                        $("#back-title-2 h1").css({background: "white"});
                        $("#back-title-3 h1").css({background: "white"});
                        $(".back h4").css({background: "white"});
                    });
        
                   
                    
                    $(".back").click(function() {
                        $(".back").css({color: "transparent"});
                        $(".back a").css({color: "transparent"});
                        $("#back-title-1 h1").css({background: "transparent"});
                        $("#back-title-2 h1").css({background: "transparent"});
                        $("#back-title-3 h1").css({background: "transparent"});
                        $(".back h4").css({background: "transparent"});
                    });
        }
    
    
    if ($(window).width() > 800) {
                    
            
                    $(".front").click(function() {
                        $(".back").css({color: "black"});
                        $(".back a").css({color: "black"});
                        
                        $(".back h4").hover(function() {
                            
                            $(".back h4").toggleClass("red");
                            
                        });
                    });
                    
                    $(".back").click(function() {
                        $(".back").css({color: "transparent"});
                        $(".back a").css({color: "transparent"});
                    });
        }
    
    
    if ($(window).width() <= 600) {
        
        var one = "Chirashizushi-Sashimi-Specials.html";
        var two = "Makizsushi-Sashimi-Specials.html";
        var three = "Nigirizushi-Sashimi-Specials.html";
        
        
        $("#back-title-1").attr("href", one);
        
        $("#back-title-2").attr("href", two);
        
        $("#back-title-3").attr("href", three);
    }
    
    
});






        