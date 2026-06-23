fetch(' https://jsonplaceholder.typicode.com/posts/1 ')
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers.get('Content-Type'));
        return response.json();
    })
    .then(data => console.log(data));
