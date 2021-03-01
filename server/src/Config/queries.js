const queries = {
    SELECT: {
        GetAllUsers: "SELECT  * FROM users",
        GetUserByEmail: "SELECT * FROM users WHERE email = ?",
        GetUserById: "SELECT * FROM users WHERE id = ?",
        GetUserByUsername: "SELECT * FROM users WHERE username = ?",
        GetUserByToken: "SELECT * FROM users WHERE token = ?",
    },
    INSERT: {
        AddUser: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    },
    UPDATE: {
        UpToken: 'UPDATE users SET token = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE token = ?',
        verif: 'UPDATE users SET verification = 1 WHERE email = ?',
        non_verif: 'UPDATE users SET verification = 0 WHERE email = ?',
        UpdateOnline: "UPDATE users SET online = 1 ,last_signin = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET online = 0 ,last_signin = NOW() WHERE id = ?",
    },
}

module.exports = queries;