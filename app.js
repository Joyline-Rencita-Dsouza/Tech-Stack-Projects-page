// Function to filter projects by category
function filterProjects(category) {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the clicked button
    document.querySelector(`.filter-bar button[onclick="filterProjects('${category}')"]`).classList.add('active');

    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize a delay variable
    let delayCounter = 0.8;

    // Loop through each project card
    projectCards.forEach(card => {
        // Reset animation
        card.style.animation = 'none';

        // Show or hide cards based on the selected category
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';

            // Force reflow to reset animation
            void card.offsetWidth;

            // Apply animation with a delay
            card.style.animation = 'slideDown 1.5s ease forwards';
            card.style.animationDelay = `${delayCounter}s`;

            // Increment the delay for sequential animation
            delayCounter += 0.2;
        } else {
            card.style.display = 'none';
        }
    });
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');

    // Assign initial animation delays to all cards
    projectCards.forEach((card, index) => {
        const delay = 0.8 + index * 0.2;
        card.style.animationDelay = `${delay}s`;
    });

    // Display all projects initially with animations
    filterProjects('all');
});
