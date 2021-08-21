window.onload = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        const tableBody = document.querySelector('tbody');
        data.forEach(result => {
            tableBody.innerHTML += `
                <tr>
                    <td>${result.id}</td>
                    <td>${result.username}</td>
                    <td>${result.website}</td>
                </tr>
            `
        })

    }).catch((err) => {
        console.log(err);
    })
}