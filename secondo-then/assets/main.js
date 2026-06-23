fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
        console.log(data.email);
        console.log(data.address.city);
    });