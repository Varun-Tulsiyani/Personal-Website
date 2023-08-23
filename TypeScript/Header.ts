// Fetch and insert header
fetch('header.html')
    .then(function(response: Response) {
        return response.text();
    })
    .then(function(data: string): void {
        let headerPlaceholder: HTMLElement = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = data;
        }
    })
    .catch(function(error): void {
        console.error('Error fetching header:', error);
    });
