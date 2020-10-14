/*JavaScript code to activate the  carousel buttons*/
       /*$(document).ready(function(){
         $("#mycarousel").carousel( { interval: 2000 } );
         $("#carousel-pause").click(function(){
             $("#mycarousel").carousel('pause');
         });
         $("#carousel-play").click(function(){
             $("#mycarousel").carousel('cycle');
         });
     });*/
 $(document).ready(function(){
      /*$('[data-toggle="tooltip"]').tooltip();*/
     $("#mycarousel").carousel( { interval: 2000 } );
     $("#carouselButton").click(function(){
             if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                 $("#mycarousel").carousel('pause');
                 $("#carouselButton").children("span").removeClass('fa-pause');
                 $("#carouselButton").children("span").addClass('fa-play');
             }
             else if ($("#carouselButton").children("span").hasClass('fa-play')){
                 $("#mycarousel").carousel('cycle');
                 $("#carouselButton").children("span").removeClass('fa-play');
                 $("#carouselButton").children("span").addClass('fa-pause');                    
             }
         });

       /*week 4 reserve table button trigger modal using javascript*/
         $("#buttonReserveTable").click(function(){
                 $('#tableModal').modal('show');
         });
       /*week 4 login button trigger modal using javascript*/
         $("#buttonLogin").click(function(){
                 $('#loginModal').modal('show');
         });
 });