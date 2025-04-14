document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading time
    setTimeout(() => {
        document.getElementById('dreamButton').style.display = 'block';
    }, 3000);

    document.getElementById('dreamButton').addEventListener('click', function() {
        // Open Dreams Diary
        window.open('dreams-diary.html', '_blank');
        // Open Dreams Total
        window.open('dreams-total.html', '_blank');
    });
}); 