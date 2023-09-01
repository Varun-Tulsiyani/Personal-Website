// Fetch and insert footer
fetch('footer.html')
    .then(function(response: Response) {
        return response.text();
    })
    .then(function(data: string): void {
        // @ts-ignore
        let footerPlaceholder: HTMLElement = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = data;
        }
    })
    .catch(function(error): void {
        console.error('Error fetching footer:', error);
    });