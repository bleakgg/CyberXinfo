// Nothing complex needed for this site, but including a script file for future enhancements

// Event listeners for any dynamic content
document.addEventListener('DOMContentLoaded', function() {
    // Log that the site has loaded
    console.log('CyberGuard website loaded successfully');
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add hover effect for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(77, 92, 109, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Floating particles effect
    const particlesContainer = document.querySelector('.floating-particles');
    if (particlesContainer) {
        const numberOfParticles = 15;
        
        for (let i = 0; i < numberOfParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 5 and 15px
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animation = `float ${duration}s infinite ease-in-out`;
            
            particlesContainer.appendChild(particle);
        }
    }
});
