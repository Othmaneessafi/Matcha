const queries = {
    SELECT: {
        GetAllUsers: "SELECT  * FROM users",
        GetUserByEmail: "SELECT * FROM users WHERE email = ?",
        GetUserById: "SELECT * FROM users WHERE id = ?",
        GetUserByUsername: "SELECT * FROM users WHERE username = ?",
        GetUserByToken: "SELECT * FROM users WHERE token = ?",
        GetTagId: "SELECT tag_id FROM tags WHERE tag = ?",
        GetTags: "SELECT tags.* FROM tags",
        CheckTag: "SELECT COUNT(tag) as n FROM tags WHERE tag IN (?)",
        TagCreatedNbr: "SELECT COUNT(tag) as n FROM tags WHERE create_tag = ? ",
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
        UpdateInfos: "UPDATE users SET first_name = ? , last_name = ? , bio = ?, birth_date = ?, gender = ?, intrest = ? WHERE id = ?",
        CreateTag: "INSERT INTO tags (tag, create_tag) VALUES (?, ?)"
    },
    DELETE: {
        DeleteUserTags: "DELETE FROM `useTags` WHERE id_user = ?",
    },
}
module.exports = queries;