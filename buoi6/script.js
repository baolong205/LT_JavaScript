let URL = 'https://reqres.in/api/users?page=2'
let tabletBody = document.getElementById('tableBody')
fetch(URL, {
    method: "Get" , // put or delete
    headers: {
        "Content-Type": "application/json"
    },
})
.then( response => response.json())
.then(data => {
    console.log(data);
    let listUser = data.data
    listUser.forEach(user => {
        let id = user.id
        let email = user.email
        let firstName = user.firstName
        let lastName = user.lastName
        let avatar = user.avatar
        let row = `<tr>
            <td>${id}</td>
            <td>${email}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td><img src="${avatar}"</td>
        <tr>`
        tabletBody.innerHTML += row
    });
});

document.getElementById('btn-create-user').addEventListener('click',()=> {
    let username = document.getElementById('username').value
    let job = document.getElementById('job').value

    let URL = 'https://reqres.in/api/users'
    fetch(URL, {
        method: "POST" , // put or delete
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": username,
            "job": job
        })
    })
    .then( response => response.json())
    .then(data => {
        console.log(data);
        alert(`User have id: ${data.id} create at ${data.createdAt}`)
       console.log(data);

        }).catch(error => {
            console.log(error)
        }).finally(() => {
            console.log('done')
        })
    })
