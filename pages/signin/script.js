const signin = document.forms.signin;
const baseUrl = "http://localhost:8080";

async function checkData(url, { email, password }) {
    const responce = await fetch(url);

    if (responce.ok) {
        let data = await responce.json();
        let result = data.filter((item) => {
            return item.email === email && item.password === password;
        });

        return result[0].id
    }
}

signin.onsubmit = function (e) {
    e.preventDefault();
    let data = new FormData(signin);
    let user = {
        email: data.get("email"),
        password: data.get("password"),
    };

    let userId = checkData(`${baseUrl}/users`, user);
    localStorage.setItem("user", userId);
};
