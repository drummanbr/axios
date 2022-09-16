const url = "http://localhost:5500/api"
//const url = "https://viacep.com.br/ws/01001000/json/"
const newUser = {
    name: "Odair Drumman",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Rio do Sul",
}
const UserUpdated = {
    name: "Emily Casoli",
    avatar: "http://lorempixel.com.br/500/400/?1",
    city: "Rio do Sul",
}

function getUser() {
    axios.get(url)
        .then(response => {
            console.log(response)
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
//getUser()

function addNewUser() {
    axios.post(url, newUser)
        .then(response => {
            console.log(response.data)
            alert(JSON .stringify(response.data))
        })
    .catch(error => console.log(error))
}
//addNewUser()

function updateUser() {
    axios.put(`${url}/3`, UserUpdated)
        .then(response => {
            alert(JSON.stringify(response.data))
            console.log(response.data)
        })
    .catch(error => console.log(error))
}
//updateUser()

function deleteUser() {
    axios.delete(`${url}/7`)
        .then(response => {        
            alert(JSON.stringify(response.data))
        })
        .catch(error => console.log(error))
}
//deleteUser()

function getOneUser() {
    axios.get(`${url}/2`)
        .then(response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(error => console.log(error))
}
getOneUser()