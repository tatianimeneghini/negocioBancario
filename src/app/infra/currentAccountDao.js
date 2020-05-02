class CurrentAccountDao {
    constructor(db) {
        this._db = db;
    }

    add(currentAccount) {
        return new Promise ((resolve, reject) => {
            this._db.run(`
            INSERT INTO currentAccount (
                numberCurrentAccount,
                codeClient,
                bank,
                code,
                codeAgency,
                openingDate,
                enclosureDate
            ) values (?,?,?,?,?,?,?)
            `, 
            [
                currentAccount.numberCurrentAccount,
                currentAccount.codeClient,
                currentAccount.bank,
                currentAccount.code,
                currentAccount.codeAgency,
                currentAccount.openingDate,
                currentAccount.enclosureDate
            ],

            function (error) {
                if (error) {
                    console.log(error);
                    return reject("The current account haven't registered");
                }

                resolve();
            }
            )
        });
    }

    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                    DELETE
                    FROM currentAccount
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
    
module.exports = CurrentAccountDao;