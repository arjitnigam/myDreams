document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading time
    setTimeout(() => {
        // Hide the loading animation
        document.querySelector('.loading-animation').style.display = 'none';
        
        // Show the button
        const dreamButton = document.getElementById('dreamButton');
        dreamButton.classList.add('show');
        dreamButton.style.display = 'block';
    }, 3000);

    document.getElementById('dreamButton').addEventListener('click', function() {
        // Open Dreams Diary
        window.open('dreams-diary.html', '_blank');
        // Open Dreams Total
        window.open('dreams-total.html', '_blank');
    });
}); 