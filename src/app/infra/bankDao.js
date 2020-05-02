class BankDao {
    constructor(db) {
        this._db = db;
    }

    add(bank) {
        return new Promise ((resolve, reject) => {
            this._db.run(`
            INSERT INTO bank (
                bank,
                code
            ) values (?,?)
            `, 
            [
                bank.bank, 
                bank.code
            ],

            function (error) {
                if (error) {
                    console.log(error);
                    return reject("The Bank haven't registered");
                }

                resolve();
            }
            )
        });
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(`
                    SELECT *
                    FROM bank
                `,
                (error, results) => {
                    if (error) return reject(error);
                    
                    return resolve(results);
                }
            )
        });
        
    };

    findById(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`SELECT * FROM bank WHERE id = ?`,
                [id], 
                (error, bank) => {
                    if (error) {
                        console.log(error);
                        return reject(`The bank id ${id} haven't find`);
                    }
                    return resolve(bank);
                });
        });
    }

    update(bank) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE bank SET
                bank,
                code
                WHERE id = ?
            `,
            [
                bank.bank,
                bank.code,
                bank.id
            ],
            error => {
                if (error) {
                    return reject(error);
                }

                resolve();
            });
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                    DELETE
                    FROM bank
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

module.exports = BankDao;