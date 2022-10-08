
document.addEventListener("DOMContentLoaded", function(event){

    var tl = gsap.timeline({
        repeat: -1
});

    tl
       .to(".imagecontainerr", {
        ease : Expo.easeInOut,
        width : "100%",
        duration : 2,
        stagger : 2
    },"a")

       .to(".text h1", {
        ease: Expo.easeInOut,
        duration:2,
        stagger:2,
        top:0
    },"a")

       .to(".text h1", {
        delay:2,
        ease: Expo.easeInOut,
        duration:2,
        stagger:2,
        top:"100px"
    },"a")
     
        .to(".para", {
            ease : Expo.easeInOut,
            duration:2,
            stagger:2,
        },"a")

        
        .to(".para p", {
            ease:Expo.easeInOut,
            duration:2,
            stagger:2,
            left:0
    },"a")
        
        .to(".para p", {
            delay:2,
            ease:Expo.easeInOut,
            duration:2,
            stagger:2,
            left:"400px"
    },"a")

})