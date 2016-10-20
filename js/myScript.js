$("document").ready(function(){
    
    //navigation scroll for mobile and tablet
    $(".menu").click(function() {
        $("nav ul").toggleClass("navScroll");
        
        //navbar collapse when mouse leaves navbar
        $(this).parent().mouseleave(function() {
            $("nav ul").removeClass("navScroll");
        });
    });
    
    //listen to browser resize, reseting navbar if necessary
    window.onresize = checkNav;
    function checkNav() {
        if (window.innerWidth >= 768) {
            $("nav ul").removeClass("navScroll");
        }
    }
});