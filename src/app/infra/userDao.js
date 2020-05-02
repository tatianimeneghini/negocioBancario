class UserDao {
    constructor(db) {
        this._db = db;
    }

    add(user) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO user (
                codeUser,
                nameUser,
                statusUser
                ) values (?,?,?)
            `,
            [
                user.codeUser,
                user.nameUser,
                user.statusUser,
                user.id
            ],
            error => {
                if (error) {
                    return reject("The user haven't registered");
                }

                resolve();
            });
        });
    }

    findByActiveUsers(statusUser) {
        return new Promise((resolve, reject) => {
            this._db.get(`SELECT * FROM user WHERE statusUser = active`,
                [statusUser], 
                (error, user) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(`The active users are ${user}`);
                });
        });
    }

    findByInativeUsers(statusUser) {
        return new Promise((resolve, reject) => {
            this._db.get(`SELECT * FROM user WHERE statusUser = inative`,
                [statusUser], 
                (error, user) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(`The inative users are ${user}`);
                });
        });
    }

    findBySuspenseUsers(statusUser) {
        return new Promise((resolve, reject) => {
            this._db.get(`SELECT * FROM user WHERE statusUser = suspense`,
                [statusUser], 
                (error, user) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(`The suspense users are ${user}`);
                });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                    DELETE
                    FROM user
                    WHERE id = ?
                `,
                [id],
                (error) => {
                    if (error) {
                        return reject("It's not possible to exclude!")
                    }
                    return resolve();
                }
            );
        });
    }

}

module.exports = UserDao;