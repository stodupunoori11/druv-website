document.getElementById('memoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let imageLink = document.getElementById('imageLink').value;

    let memoryEntry = `<p><strong>${name}:</strong> ${message}</p>`;
    
    if (imageLink) {
        memoryEntry += `<img src="${imageLink}" alt="Shared memory" style="max-width:100%; border-radius:5px;">`;
    }

    let memoriesList = document.getElementById('memoriesList');
    memoriesList.innerHTML += memoryEntry + "<hr>";

    // Clear form
    document.getElementById('memoryForm').reset();
});
