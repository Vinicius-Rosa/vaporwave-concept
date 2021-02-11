(function () {
    document.addEventListener("mousemove", parallax);

    const elem = document.querySelectorAll(".medusa-container img");
    const clouds = document.querySelectorAll("#cloud-scene");

    function parallax(e) {

        elem.forEach(function (move) {
            let movingValue = move.getAttribute("data-value");
            let x = e.clientX * movingValue / 250;
            let y = e.clientY * movingValue / 250;

            move.style.transform = `translateX(${x}px) translateY(${y}px)`;
            // clouds.style.margin = `${y} ${x}`;
        })
    }

})();

function go() {
    const tl = new TimelineMax();

    // Tags run
    tl.to(".overlay1", 1, {
        width: '100%',
        ease: Expo.easeInOut
    }, "+=.2");

    tl.to(".overlay2", 1, {
        width: '100%',
        ease: Expo.easeInOut
    }, "-=.2");

    tl.to(".overlay3", 1, {
        width: '100%',
        ease: Expo.easeInOut
    }, "-=.2");

    // Hide container
    tl.to(".container", 0, {
        opacity: '0%',
        ease: Expo.easeInOut
    });

    // Show something new
    tl.to(".new", 0.5, {
        opacity: '100%',
        display: 'flex',
        ease: Expo.easeInOut
    });


    // Tags came back
    tl.to(".overlay3", 1, {
        width: '0%',
        ease: Expo.easeInOut
    });

    tl.to(".overlay2", 1, {
        width: '0%',
        ease: Expo.easeInOut
    }, "-=.2");
    tl.to(".overlay1", 1, {
        width: '0%',
        ease: Expo.easeInOut
    }, "-=.2");

}