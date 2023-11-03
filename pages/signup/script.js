let signupForm = document.forms.signup
const baseUrl = "http://localhost:8080"
async function sendData(url, user) {
    let responce = await fetch(url, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (responce.ok) {
        location.assign("/pages/signin/")
    }

    console.log(responce);
}


signupForm.onsubmit = function (e) {
    e.preventDefault();
    let data = new FormData(signupForm);
    let user = {
        name: data.get("name"),
        surname: data.get("surname"),
        email: data.get("email"),
        password: data.get("password")
    }

    sendData(`${baseUrl}/users`, user);
    console.log(
        "worked"
    );
}