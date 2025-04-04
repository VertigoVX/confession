document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const openLetterBtn = document.getElementById('open-letter');
    const landingPage = document.querySelector('.landing-page');
    const proposalPage = document.querySelector('.proposal-page');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const celebrationPage = document.querySelector('.celebration');
    const typedMessage = document.getElementById('typed-message');
    const messageContent = document.getElementById('message-placeholder');
    
    // Your personal message - Edit this!
    const personalMessage = `Cream Puff, how do I even begin, ever since you've come into my life you've taught me so much.

    Before you I don't think I ever truly understood the depth of my heart, and its capacity to feel such adoration, admiration and love for one person.

    I never imagined us being where we are right now, you're everything I prayed for, everything I wished for, and everything I want to keep for the rest of my life.

    I feel like this is very late in the making but I wanted this moment to be special, you deserve more than just a simple text message asking you this question so I asked my friend Sebastian from black butler to help me out ;)
    
    Cream Puff, would you do me the honour of being my girlfriend? (officially)`;
    
    // Create falling petals
    createFallingPetals();
    
    // Create floating hearts
    createFloatingHearts();
    
    // Open letter button click event
    openLetterBtn.addEventListener('click', function() {
        landingPage.classList.add('hidden');
        proposalPage.classList.remove('hidden');
        
        // Initialize typed.js
        new Typed('#typed-message', {
            strings: [personalMessage],
            typeSpeed: 60,
            showCursor: true,
            cursorChar: '|',
            onComplete: function() {
                document.querySelectorAll('.decision-buttons button').forEach(btn => {
                    btn.style.opacity = '1';
                    btn.style.transform = 'translateY(0)';
                });
            }
        });
    });
    
    // Yes button click event
    yesButton.addEventListener('click', function() {
        proposalPage.classList.add('hidden');
        celebrationPage.classList.remove('hidden');
        createConfetti();
    });
    
    // No button hover and click events - make it run away!
    let clicks = 0;
    noButton.addEventListener('mouseover', function(e) {
        const button = e.target;
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    });
    
    noButton.addEventListener('click', function() {
        clicks++;
        if (clicks >= 3) {
            noButton.innerHTML = "Just say yes already! <i class='fa-solid fa-heart'></i>";
        }
    });
    
    // Create falling petals
    function createFallingPetals() {
        const petalsContainer = document.querySelector('.falling-petals');
        const colors = ['#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#3949AB'];
        
        for (let i = 0; i < 30; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.position = 'absolute';
            petal.style.width = `${Math.random() * 15 + 10}px`;
            petal.style.height = `${Math.random() * 15 + 10}px`;
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            petal.style.borderRadius = '50%';
            petal.style.opacity = Math.random() * 0.5 + 0.3;
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.animationDuration = `${Math.random() * 10 + 5}s`;
            petal.style.animationDelay = `${Math.random() * 5}s`;
            petal.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;
            petal.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Create the falling animation
            const fallKeyframes = `
            @keyframes fall {
                0% {
                    transform: translateY(-10px) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: ${Math.random() * 0.5 + 0.3};
                }
                100% {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }`;
            
            // Add the keyframes to the document
            const style = document.createElement('style');
            style.innerHTML = fallKeyframes;
            document.head.appendChild(style);
            
            petalsContainer.appendChild(petal);
        }
    }
    
    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.style.position = 'absolute';
            heart.style.fontSize = `${Math.random() * 20 + 10}px`;
            heart.style.color = i % 2 === 0 ? '#4CAF50' : '#9C27B0';
            heart.style.opacity = Math.random() * 0.6 + 0.2;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
            heart.style.animation = `float ${Math.random() * 8 + 5}s ease-in-out infinite`;
            
            heartsContainer.appendChild(heart);
        }
    }
    
    // Create confetti for celebration
    function createConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        const colors = ['#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#3949AB', '#9C27B0', '#FFD54F'];
        
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = `${Math.random() * 10 + 5}px`;
                confetti.style.height = `${Math.random() * 10 + 5}px`;
                confetti.style.opacity = Math.random() * 0.8 + 0.2;
                confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
                
                // Create the falling animation for confetti
                const confettiKeyframes = `
                @keyframes confetti-fall {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                        opacity: ${Math.random() * 0.8 + 0.2};
                    }
                    100% {
                        transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                        opacity: 0;
                    }
                }`;
                
                // Add the keyframes to the document
                const style = document.createElement('style');
                style.innerHTML = confettiKeyframes;
                document.head.appendChild(style);
                
                confettiContainer.appendChild(confetti);
                
                // Remove confetti after animation
                setTimeout(() => {
                    confetti.remove();
                    style.remove();
                }, 5000);
            }, i * 20);
        }
    }
});
