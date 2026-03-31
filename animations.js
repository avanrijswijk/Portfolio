
document.addEventListener("DOMContentLoaded", function() {
    
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
    });

    if (document.getElementById('typed-text')) {
        var typed = new Typed('#typed-text', {
            strings: [
                "Étudiant en 2ème année de BUT Informatique.",
                "Passionné par le développement logiciel.",
                "À la recherche d'un stage pour mettre en pratique mes acquis."
            ],
            typeSpeed: 40,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

});