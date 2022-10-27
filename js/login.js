let elForm = document.querySelector('.js-form');
let elEmail = document.querySelector('.js-input');
let elPassword = document.querySelector('.js-password');

elForm.addEventListener('submit', (e) => {
    e.preventDefault('');

    let emailVal = elEmail.value;
    let passwordVal = elPassword.value;

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: `${passwordVal}`
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                window.location.replace('index.html')
            }
        })
})