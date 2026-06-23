fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        body: 'Contenuto del post',
        userId: 1,
    }),
    headers: { 'Content-Type': 'application/json' }
})
    .then(response => response.json())
    .then(data => {
        console.log('id creato: ' + data.userId);
    });