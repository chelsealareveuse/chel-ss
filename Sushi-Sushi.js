var menu = "Sushi-Sushi-Menu.png";
            var place = "Sushi-Sushi-Locations.png";
            var about = "Sushi-Sushi-About.png";
            
            var menuLink = "Sushi-Sushi-Menu.html";
            var placeLink ="Sushi-Sushi-Locations.html";
            var aboutLink = "Sushi-Sushi-About.html";
            
            var sushiSlides = [menu,place,about];
            
            var sushiLinks = [menuLink,placeLink,aboutLink];
            
            i = 0;
            
            var linkNumber = 0;
            

           $(window).ready(function() {
               
              $("#slide").attr("src", sushiSlides[0]);
               
               $("#enter").attr("href", sushiLinks[0]);
               
               $(".arrows").hover(function() {
               $(this).toggleClass("solid"); 
                });
               
        });


        $(window).ready(function() {
                
        if ($(window).width() > 800) {
            $("#slide").attr("src", sushiSlides[0]);
               
               $("#enter").attr("href", sushiLinks[0]);
        }
            
          
        
    
                $("#right-arrow").click(function() {
        
                i = (i + 1) % sushiSlides.length;
        
                $("#slide").attr("src", sushiSlides[i]);
            
            
                $("#slide").animate({marginLeft: "200%"}, 0, function(){
                $("#slide").animate({marginLeft: "0%"}, 500);
            });
                    
        
                linkNumber = (linkNumber + 1) % sushiLinks.length;
        
                $("#enter").attr("href", sushiLinks[linkNumber]); 
        
            });
            
      
                $("#left-arrow").click(function() {
        
                if ($("#slide").attr("src") == sushiSlides[0]) {
                $("#slide").css({marginLeft: 0});
                $("#enter").attr("src", sushiLinks[0]);
            }
        
                else {
                i = (i - 1) % sushiSlides.length;
                $("#slide").attr("src", sushiSlides[i]);
    
                $("#slide").animate({marginLeft: "-300%"}, 0, function(){
                $("#slide").animate({marginLeft: "0%"}, 500);
                });
                
                
                linkNumber = (linkNumber - 1) % sushiLinks.length;
                $("#enter").attr("href", sushiLinks[i]);
                
            }             
        });
        
            
});





