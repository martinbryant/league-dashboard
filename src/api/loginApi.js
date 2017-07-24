const users = [
    {
        userName: 'MBryant',
        password: 'qwerty'
    },
    {
        userName: 'JBryant',
        password: 'mother'
    }
];

const findUserByUserName = (userName) => users.find(user => userName === user.userName);

const authUser = (userName, password) => {
    const user = findUserByUserName(userName);
    return (user && user.password === password)
        ? userName
        : '';
};

class LoginApi {
    static loginUser(userName, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(authUser(userName, password));
            }, 2000);
        });
    }
}

export default LoginApi;