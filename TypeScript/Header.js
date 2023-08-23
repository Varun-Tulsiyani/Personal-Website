// Fetch and insert header
fetch('header.html')
    .then(function (response) {
    return response.text();
})
    .then(function (data) {
    var headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
    }
})
    .catch(function (error) {
    console.error('Error fetching header:', error);
});
