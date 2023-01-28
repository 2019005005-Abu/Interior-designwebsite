$(document).ready(function(){
  $('.all_service').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
           
        }
    }
})

});


