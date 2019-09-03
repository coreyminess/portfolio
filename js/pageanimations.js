

$(document).ready(function() {
    window.sr = ScrollReveal({ reset: true });
    
    sr.reveal('.reveal1', {origin: 'left', distance: '60px', opacity: 0, easing: 'cubic-bezier(0.25, 0, 0, 1)', duration: 1500,});
    sr.reveal('.reveal2', {origin: 'left', distance: '60px', opacity: 0, easing: 'cubic-bezier(0.25, 0, 0, 1)', duration: 1500,});
    sr.reveal('.reveal3', {origin: 'right', distance: '60px', opacity: 0, easing: 'cubic-bezier(0.25, 0, 0, 1)', duration: 1500,});

    sr.reveal('.reveal1b', {origin: 'left', distance: '60px', opacity: 0, easing: 'cubic-bezier(0.25, 0, 0, 1)', delay: 75, duration: 600,});
    sr.reveal('.reveal2b', {origin: 'left', distance: '60px', opacity: 0, easing: 'cubic-bezier(0.25, 0, 0, 1)', delay: 75, duration: 500,});
    sr.reveal('.reveal3b', {origin: 'right', distance: '60px', opacity: 0, easing: 'cubic-bezier(0.25, 0, 0, 1)', delay: 75, duration: 500,});

    sr.reveal('.revealopacity', {opacity:0, duration: 450,});
    sr.reveal('.revealopacity2', {opacity:0, delay: 75, duration: 450,});
    sr.reveal('.revealopacity3', {opacity:0, delay: 150, duration: 450,});
    sr.reveal('.revealopacity4', {opacity:0, delay: 200, duration: 450,});
    })