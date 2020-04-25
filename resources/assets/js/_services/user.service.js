export const userService = {
    login,
    logout,
    register
};

function login(email, password) {
    return axios.post('/api/login', {
        email: email,
        password: password
    })
        .then((response) => {
            if (response.data && response.data.token) {
                localStorage.setItem('owo-token', JSON.stringify(response.data.token));
            }

            return response;
        })
        .catch((e) => {
            return e.response;
        });
}

function logout() {
    return localStorage.removeItem('owo-token');
}

function register(name, email, password) {
    return axios.post('/api/register', {
        name: name,
        email: email,
        password: password,
    })
        .then(() => {
        })
        .catch((e) => {

            console.log(e);
        });
}
