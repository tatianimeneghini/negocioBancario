class AgencyDao {
    constructor(db) {
        this._db = db;
    }

    add(agency) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO agency (
                bank,
                codeAgency,
                nameUAgency,
                dateInclusion,
                cepAgency,
                adressAgency
                ) values (?,?,?,?,?,?)
            `,
            [
                agency.bank,
                agency.codeAgency,
                agency.nameUAgency,
                agency.dateInclusion,
                agency.cepAgency,
                agency.adressAgency,
                agency.id
            ],
            error => {
                if (error) {
                    return reject("The agency haven't registered");
                }

                resolve();
            });
        });
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(`
                    SELECT * 
                    FROM bank
                `,
                (error, result) => {
                    if (error) return reject(error);
                    
                    return resolve(result);
                }
            )
        })
        
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this._db.get(`SELECT * FROM agency WHERE id = ?`,
                [id], 
                (error, bank) => {
                    if (error) {
                        console.log(error);
                        return reject(`The client id ${id} haven't find`);
                    }
                    return resolve(agency);
                });
        });
    }

    modify(agency) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE agency SET
                bank,
                codeAgency,
                nameUAgency,
                dateInclusion,
                cepAgency,
                adressAgency
                WHERE id = ?
            `,
            [
                agency.bank,
                agency.codeAgency,
                agency.nameUAgency,
                agency.dateInclusion,
                agency.cepAgency,
                agency.adressAgency,
                agency.id
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
                    FROM agency
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

module.exports = AgencyDao;