const queries = {
    SELECT: {
        GetUsers: "SELECT * FROM users WHERE id != ? AND verification = 1 AND step = 3",
        GetAllUsers: "SELECT  * FROM users",
        GetUserByEmail: "SELECT users.* FROM users WHERE users.email = ?",
        GetUserById: "SELECT users.* FROM users WHERE users.id = ?",
        GetUserByUsername: "SELECT users.* FROM users WHERE users.username = ?",
        GetUserByToken: "SELECT * FROM users WHERE token = ?",
        GetTagId: "SELECT id FROM tags WHERE name= ?",
        GetTags: "SELECT tags.* FROM tags",
        CheckTag: "SELECT COUNT(name) as n FROM tags WHERE name IN (?)",
        TagCreatedNbr: "SELECT COUNT(name) as n FROM tags WHERE create_tag = ? ",
        GetPics: "SELECT * FROM images WHERE user_id = ?",
        GetProfilePic: "SELECT path FROM images WHERE user_id = ? AND profile_img = 1",
    },
    INSERT: {
        AddUser: 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        InsertUserTag: "INSERT INTO useTags (id_user, id_tag) VALUES (?, ?)",
        CreateTag: "INSERT INTO tags (tag, create_tag) VALUES (?, ?)",
        AddPic: 'INSERT INTO images(user_id, path, profile_img) VALUES (?, ?, ?)',

    },
    UPDATE: {
        UpToken: 'UPDATE users SET token = ? WHERE email = ?',
        ResetPassword: 'UPDATE users SET password = ? WHERE token = ?',
        verif: 'UPDATE users SET verification= 1 WHERE email = ?',
        non_verif: 'UPDATE users SET verification= 0 WHERE email = ?',
        UpdateInfo: "UPDATE users SET last_name = ?, first_name = ?, gender = ?, intrest = ?, birth_date = ?, bio = ? WHERE id = ?",
        UpdateOnline: "UPDATE users SET Online = 1 ,last_signin = null WHERE id = ?",
        UpdateOffline: "UPDATE users SET Online = 0 ,last_signin = NOW() WHERE id = ?",
        UpdateStep: "UPDATE users SET step = ? WHERE id = ?",
        setProfilePic: 'UPDATE images SET profile_img = 1 WHERE id = ? && user_id = ?',
        resetProfilePic: 'UPDATE images SET profile_img = 0 WHERE user_id = ?',
        setFirstProPic: 'UPDATE  images SET profile_img = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1',
        UpdateLocation: "UPDATE users SET latitude = ? , longitude = ? WHERE id = ?",

    },
    DELETE: {
        delPics: 'DELETE FROM `pics` WHERE id = ? && user_id = ?',
        DeleteUserTags: "DELETE FROM `useTags` WHERE id_user = ?",
    },
}

module.exports = queries;