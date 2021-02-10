// LEFT ITEMS ANIMATION
TweenMax.from("#box1 span", 1, {
    delay: 0.2,
    left: '-100%',
    ease: Expo.easeInOut
});

TweenMax.from("#box2 span", 1, {
    delay: 0.5,
    left: '-100%',
    ease: Expo.easeInOut
});

TweenMax.from("#box3 span", 1, {
    delay: 0.8,
    left: '-100%',
    ease: Expo.easeInOut
});

// RIGHT ITEMS ANIMATION
TweenMax.from("#go button", 1, {
    delay: 2,
    right: '-100%',
    ease: Expo.easeInOut
});

// MEDUSA ANIMATION
TweenMax.from("#medusa1", 1, {
    delay: 0.2,
    bottom: '-15%',
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from("#medusa2", 1, {
    delay: 0.3,
    bottom: '-15%',
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from("#medusa3", 1, {
    delay: 0.4,
    bottom: '-15%',
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from(".eye", 0.6, {
    delay: 1,
    width: 0,
    opacity: 0,
    ease: Elastic.easeInOut
});

// 3D ELEMENTS ANIMATION
TweenMax.from("#cloud-scene", 0.6, {
    delay: 0.6,
    bottom: '-15%',
    opacity: 0,
    ease: Expo.easeInOut
});