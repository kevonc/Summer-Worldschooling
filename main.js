// Gallery and Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');
    const modal = document.getElementById('experienceModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');

    // Create gallery items
    experiences.forEach(experience => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${experience.image}" alt="${experience.title}">
            <h3>${experience.title}</h3>
        `;

        galleryItem.addEventListener('click', () => {
            modalImage.src = experience.image;
            modalImage.alt = experience.title;
            modalTitle.textContent = experience.title;
            
            // Create structured content for the modal
            const modalContent = `
                <p class="experience-description">${experience.description}</p>
                
                <div class="experience-meta">
                    <span class="meta-item type">Type: ${experience.type}</span>
                    <span class="meta-item intensity">Intensity: ${'★'.repeat(experience.intensityLevel)}${'☆'.repeat(5-experience.intensityLevel)}</span>
                    <span class="meta-item period">Duration: ${experience.travelPeriod}</span>
                    <span class="meta-item age">Age: ${experience.idealAge} years</span>
                </div>

                <div class="experience-learning">
                    <h4>What Kids Will Learn:</h4>
                    <ul>
                        ${experience.learningOutcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                    </ul>
                </div>

                <div class="experience-recap">
                    <h4>Daily Recap Activity:</h4>
                    <p>${experience.dailyRecap}</p>
                </div>
            `;
            
            modalDescription.innerHTML = modalContent;
            modal.style.display = 'block';
        });

        galleryGrid.appendChild(galleryItem);
    });

    // Close modal functionality
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

// Contact Form Functionality
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted:', formData);
    
    // Clear form
    contactForm.reset();
    
    // Show success message (you can enhance this)
    alert('Thank you for your message! We\'ll get back to you soon.');
}); 