export const userService = {
    login,
    logout,
};

const USERS = [
    {
        username: 'Hari',
        password: 'Seldon'
    },
    {
        username: 'Salvor',
        password: 'Hardin'
    },
]

function login(username, password) {
    const user = USERS.find(item => {
        return item.password === password && item.username === username;
    }) || null;

    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}