const elList = document.querySelector('.list');
let logOut = document.querySelector('.logout');
const localToken = localStorage.getItem('token');

if (!localToken) {
    window.location.replace('login.html')
}

let render = (array, node) => {
    array.forEach(el => {
        node.innerHTML += `
        <li class="list__item">
            <span>${el.id}</span>
            <span>${el.email}</span>
            <span>${el.first_name}</span>
            <span>${el.last_name}</span>
            <img src="${el.avatar}" alt="" width="100" height="80">
        </li>
        `
    });
}

async function users() {
    try {
        let res = await fetch('https://reqres.in/api/users?page=1')
        let data = await res.json();
        render(data.data, elList)
    }
    catch (err) {
        console.log(err);
    }
}
users();

logOut.addEventListener('click', () => {
    window.localStorage.removeItem('token');
    window.location.replace('login.html')
})