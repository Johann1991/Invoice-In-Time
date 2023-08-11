function toggleViews() {
    document.body.classList.toggle('forms-toggled');
}

// Set the initial state when the page is loaded
window.onload = function() {
    if (document.body.classList.contains('forms-toggled')) {
        document.body.classList.remove('forms-toggled');
    }
}
