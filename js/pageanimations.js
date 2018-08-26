console.log('Hello World');

window.sr = ScrollReveal({ reset: true });


sr.reveal('.top', { duration: 900 });
sr.reveal('.bottom', {origin: 'right', distance: '300px', duration: 2000});
