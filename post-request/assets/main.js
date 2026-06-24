fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'il lonfo',
        userId: 2,
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => {
        const tipo = response.headers.get('Content-Type');
        console.log('Content-Type risposta:' + tipo);
        return response.json();
    })
    .then(data => console.log(data.title));