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
            if (response.data && response.data.data) {
                localStorage.setItem('owo-token', response.data.data);
                this.$router.push('/');
            }
        })
        .catch((e) => {
            console.log(e);
        });
}

function logout() {
    localStorage.removeItem('owo-token');
}

function register(name, email, password) {
    axios.post('/api/register', {
        name: name,
        email: email,
        password: password,
    })
        .then(() => {
            this.$router.push('/login');
        })
        .catch((e) => {
            console.log(e);
        });
}
