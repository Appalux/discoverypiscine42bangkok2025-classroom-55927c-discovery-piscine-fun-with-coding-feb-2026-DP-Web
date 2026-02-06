$(function() {
    // Nav Bar Section
    
    $(".nav-hamburger").on("click", function() {
        console.log("Hello")
        $(".nav-menu").toggleClass("active");
        $(".nav-hamburger").toggleClass("active");  
    })
    
    $(".nav-menu-link").on("click", function() {
        closeMenu();
    })
    
    function closeMenu() {
        $(".nav-menu").removeClass("active");
        $(".nav-hamburger").removeClass("active"); 
    }
    
    function responsive() {
        if ($(window).width() <= 550) {
            closeMenu();
        }
    }
    // Work when browser is resize(Always Working)
    $(window).on("resize", responsive);
    // Work when browser is open
    responsive();

});
