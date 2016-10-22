window.addEventListener("load", animateIntro);

function animateIntro() {
    
    var nav = $("nav"),
        navList = $("nav ul li"),
        navUl = $("nav ul"),
        introH3 = $("#intro h3"),
        introPara = $("#intro p");
    
//    run header animation
    (function() {
        TweenMax.fromTo(nav, 
                    1,
                    {y:-60},
                    {y:60,opacity: 1}
                   );
    
        TweenMax.staggerFrom(navList, 
                         0.5,
                         {opacity: 0,y:-20,delay: 0.6,ease: Back.easeOut.config(3)},
                         0.1);
        TweenMax.from(introH3, 
                         0.6,
                         {opacity: 0,y:-20,delay: 0.6,ease: Back.easeOut.config(3)},
                         0.1);
        TweenMax.staggerFrom(introPara, 
                         0.6,
                         {opacity: 0,y:-20,delay: 0.6,ease: Back.easeOut.config(3)},
                         0.1);
    })();

}
    
