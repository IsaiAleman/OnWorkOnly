export function authHeader() {
    let user = JSON.parse(localStorage.getItem('owo-token'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    }

    return {};
}
