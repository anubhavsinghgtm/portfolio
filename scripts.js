document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-up');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });


  
    const text = document.getElementById('typing-text');
    const texts = [
        
        "a Front-End Developer",
        "a Back-End Developer",
        "a Full Stack Developer",
        "a Logo Designer",
        "a Creative Developer",
        "an AWS Specialist",
        "a DevOps Professional",
        "a Technical Blogger",
        "a Tech Enthusiast",

    ];

    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            text.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(() => {
                text.textContent = '';
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                type();
            }, 1000); // Adjust delay before restarting typing effect
        }
    }

    text.textContent = '';
    type();
});




document.addEventListener('DOMContentLoaded', () => {

});