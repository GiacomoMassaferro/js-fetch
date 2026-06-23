fetch('https://jsonplaceholder.typicode.com/posts/5')
    .then(response => response.json())
    .then(data => console.log(data));