document.addEventListener('DOMContentLoaded', function() {
    const loadingAnimation = document.getElementById('loadingAnimation');
    const dreamButton = document.getElementById('dreamButton');
    
    // Simulate loading time
    setTimeout(() => {
        // Hide loading animation
        loadingAnimation.classList.add('hidden');
        
        // Show and animate button
        dreamButton.classList.remove('hidden');
        dreamButton.classList.add('show');
    }, 3000);

    dreamButton.addEventListener('click', function() {
        // Open Dreams Diary
        window.open('dreams-diary.html', '_blank');
        // Open Dreams Total
        window.open('dreams-total.html', '_blank');
    });
}); 