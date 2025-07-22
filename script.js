document.addEventListener('DOMContentLoaded', () => {
    // Get all the elements we need
    const modal = document.getElementById('signupModal');
    const ctaButton = document.getElementById('ctaButton');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const closeBtn = document.getElementById('closeBtn');
    const signupForm = document.getElementById('signupForm');

    // --- Functions to open and close the modal ---
    const openModal = () => {
        modal.style.display = 'flex';
    };

    const closeModal = () => {
        modal.style.display = 'none';
    };

    // --- Event Listeners ---

    // Open modal when CTA button or video is clicked
    ctaButton.addEventListener('click', openModal);
    videoPlaceholder.addEventListener('click', openModal);

    // Close modal when the 'x' button is clicked
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking on the overlay (outside the content)
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with the 'Escape' key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Handle form submission
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from actually submitting
        const firstName = event.target.firstName.value;
        alert(`Thank you for signing up, ${firstName}! Get ready to unlock your potential.`);
        closeModal(); // Close the modal after submission
        signupForm.reset(); // Clear the form fields
    });
});
