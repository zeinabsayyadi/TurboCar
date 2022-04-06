$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:5,
        nav:true,
        slideBy: 2,
        responsive:{
            0:{
                items:1,
                row:2
            },
            300:{
                items:1.1
            },
            400:{
                items:1.3
            },
            500:{
                items: 1.7
            },
            600:{
                items:2
            },
            700:{
                items:2.3
            },
            800:{
                items:2.7
            },
            900:{
                items:3
            },
            1000:{
                items:3.3,
            
            },
            1100:{
                items:3.7,
            
            },
            1200:{
                items:4,
                
            },
            1300:{
                items:4.3,
               
            },
            1400:{
                items:4.7,
                
            },
            1500:{
                items:5,
              
            },
            2000:{
                items:6,
              

            },
            3000:{
                items:8,
              
            },
        }
    })

 
  });



 