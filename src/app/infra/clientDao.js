class ClientDao {
    constructor(db) {
        this._db = db;
    }
    add(client) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO client (
                codeClient,
                typeClient,
                typeAdressClient,
                cepClient,
                adressClient,
                numberClient,
                cnpjClient,
                nameFantasyClient,
                dateCompany,
                nameClient,
                sexClient,
                birthdayClient,
                cpfClient,
                maritalStatus,
                matrimonyCertificate,
                registerBook,
                pageRegisterBook,
                voterRegistration,
                electoralArea,
                electoralSection,  
                registrationRecord
                ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `,
            [
                client.codeClient,
                client.typeClient,
                client.typeAdressClient,
                client.cepClient,
                client.adressClient,
                client.numberClient,
                client.cnpjClient,
                client.nameFantasyClient,
                client.dateCompany,
                client.nameClient,
                client.sexClient,
                client.birthdayClient,
                client.cpfClient,
                client.maritalStatus,
                client.matrimonyCertificate,
                client.registerBook,
                client.pageRegisterBook,
                client.voterRegistration,
                client.electoralArea,
                client.electoralSection,  
                client.registrationRecord,
                client.id
            ],
            error => {
                if (error) {
                    return reject("The client haven't registered");
                }

                resolve();
            });
        });
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(`
                    SELECT * 
                    FROM client
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
            this._db.get(`SELECT * FROM client WHERE id = ?`,
                [id], 
                (error, bank) => {
                    if (error) {
                        console.log(error);
                        return reject(`The client id ${id} haven't find`);
                    }
                    return resolve(bank);
                });
        });
    }

    modify(client) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE client SET
                codeClient,
                typeClient,
                typeAdressClient,
                cepClient,
                adressClient,
                numberClient,
                cnpjClient,
                nameFantasyClient,
                dateCompany,
                nameClient,
                sexClient,
                birthdayClient,
                cpfClient,
                maritalStatus,
                matrimonyCertificate,
                registerBook,
                pageRegisterBook,
                voterRegistration,
                electoralArea,
                electoralSection,  
                registrationRecord
                WHERE id = ?
            `,
            [
                client.codeClient,
                client.typeClient,
                client.typeAdressClient,
                client.cepClient,
                client.adressClient,
                client.numberClient,
                client.cnpjClient,
                client.nameFantasyClient,
                client.dateCompany,
                client.nameClient,
                client.sexClient,
                client.birthdayClient,
                client.cpfClient,
                client.maritalStatus,
                client.matrimonyCertificate,
                client.registerBook,
                client.pageRegisterBook,
                client.voterRegistration,
                client.electoralArea,
                client.electoralSection,  
                client.registrationRecord,
                client.id
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
                    FROM client
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

module.exports = ClientDao;