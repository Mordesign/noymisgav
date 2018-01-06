$(document).ready(function(){
    var counter=0;
    $('#slidePrev').css({"opacity": "0.3", 
                         "cursor": "auto"
                        });
    $('#slideNext').click(function(){

        if(counter < $('#photos img').length-1){
            $('#slidePrev').css({"opacity": "1", 
                                 "cursor": "pointer"
                                });
            var activeSlide = $('.activeSlide');
            var nextSlide = activeSlide.next('img');
            TweenMax.to('.activeSlide',0.5,{
                left:"-100%", 
                ease: Quint.easeOut, 
                onComplete:function(){
                    $(activeSlide).removeClass('activeSlide'); 
                }
            });

            TweenMax.to( nextSlide ,0.5,{
                left:"0%", 
                ease: Quint.easeOut, 
                onComplete:function(){
                    $(nextSlide).addClass('activeSlide'); 
                    counter++;
                    if(counter==$('#photos img').length-1){
                        console.log("hhhh +" + counter);
                        $("#slideNext").css({"opacity": "0.3", 
                                     "cursor": "auto"
                                    });
                    }
                }
            });
        }else{
            $(this).css({"opacity": "0.3", 
                         "cursor": "auto"
                        });
        }

    });


    $('#slidePrev').click(function(){
        if(counter > 0){
            $('#slideNext').css({"opacity": "1", 
                                 "cursor": "pointer"
                                });
            var activeSlide = $('.activeSlide');
            var prevSlide = activeSlide.prev('img');
            TweenMax.to('.activeSlide',0.5,{
                left:"+=100%", 
                ease:Quint.easeOut, 
                onComplete:function(){
                    $(activeSlide).removeClass('activeSlide'); 
                }
            });
            TweenMax.to(prevSlide ,0.5,{
                left:"0%", 
                ease: Quint.easeOut, 
                onComplete:function(){
                    $(prevSlide).addClass('activeSlide'); 
                    counter--;
                    if(counter==0){
                        $('#slidePrev').css({"opacity": "0.3", 
                                             "cursor": "auto"
                                            });
                    }
                }
            });
        }else{
            $('#slidePrev').css({"opacity": "0.3", 
                                 "cursor": "auto"
                                });
        }
    });

});