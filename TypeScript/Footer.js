// Fetch and insert footer
fetch('footer.html')
    .then(function (response) {
    return response.text();
})
    .then(function (data) {
    var footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
    }
})
    .catch(function (error) {
    console.error('Error fetching footer:', error);
});
