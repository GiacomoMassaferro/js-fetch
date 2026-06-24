fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'prova finale',
        body: 'sassi magici sassanti',
        userId: 5,
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    })
    .then(data => {
        console.log(`Risorsa creata con l'id:` + data.id);
    })