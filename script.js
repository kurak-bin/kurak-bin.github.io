document.addEventListener('DOMContentLoaded', function() {
    const numStars = 50; // Number of stars to generate

    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`; // Randomize animation delay
        document.body.appendChild(star);
    }
});