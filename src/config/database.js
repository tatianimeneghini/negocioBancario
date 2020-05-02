const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

const BANK_SCHEMA = 
    `
CREATE TABLE [IF NOT EXISTS] bank (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bank TEXT VARCHAR(10) NOT NULL,
    code INTEGER CHAR(4) NOT NULL    
)
`;

const INSERT_BANK_1 = 
`
INSERT INTO bank (
    bank, 
    code
) SELECT 'Itau', '341' WHERE NOT EXISTS (SELECT 'Itau', '341' WHERE NOT EXISTS (SELECT * FROM bank WHERE bank = 'Itau')
`;

const USER_SCHEMA =
    `
CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codeUser INTEGER CHAR(7) NOT NULL,
    nameUser TEXT VARCHAR(50) NOT NULL,
    statusUser TEXT NOT NULL CHECK(statusUser('active', 'inative', 'suspense'))
)    
    `;

const AGENCY_SCHEMA =
    `
CREATE TABLE IF NOT EXISTS agency (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bank TEXT VARCHAR(10) FOREIGN KEY (bank) NOT NULL,
    codeAgency INTEGER CHAR(4) NOT NULL,
    nameUAgency TEXT VARCHAR(50) NOT NULL,
    dateInclusion TIMESTAMP,
    cepAgency INTEGER CHAR(10) NOT NULL,
    adressAgency TEXT VARCHAR(100) NOT NULL FOREIGN KEY (cepAgency)
)    
    `;

const CLIENT_SCHEMA =
    `
CREATE TABLE IF NOT EXISTS client (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codeClient INTEGER CHAR(15) NOT NULL,
    typeClient TEXT NOT NULL CHECK(typeClient('fisicalPerson', 'legalPerson')),
    typeAdressClient TEXT NOT NULL CHECK(typeAdresssClient('residential', 'commercial', 'others')),
    cepClient INTEGER CHAR(10) NOT NULL,
    adressClient TEXT VARCHAR(100) NOT NULL,
    numberClient TEXT VARCHAR(10) NOT NULL,
    cnpjClient INTEGER CHAR(11) REFERENCES typeClient(legalPerson),
    nameFantasyClient TEXT VARCHAR(80) REFERENCES typeClient(legalPerson),
    dateCompany DATE REFERENCES typeClient(legalPerson),
    nameClient TEXT VARCHAR(100) NOT NULL,
    sexClient INTEGER CHAR(1) NOT NULL CHECK(statusUser('f', 'm')),
    birthdayClient DATE NOT NULL,
    cpfClient INTEGER CHAR(11) REFERENCES typeClient(fisicalPerson),
    maritalStatus TEXT CHECK(maritalStatus('single', 'married', 'widower', 'divorced', 'separed', 'stable union')) REFERENCES typeClient(fisicalPerson),
    matrimonyCertificate INTEGER CHAR(6) REFERENCES maritalStatus('married'),
    registerBook TEXT VARCHAR(25),
    pageRegisterBook TEXT VARCHAR(6),
    voterRegistration INTEGER CHAR(12) REFERENCES typeClient(fisicalPerson),
    electoralArea INTEGER CHAR(3),
    electoralSection INTEGER CHAR(4),  
    registrationRecord TIMESTAMP
)    
    `;


const CURRENTACCOUNT_SCHEMA =
    `
CREATE TABLE IF NOT EXISTS currentAccount (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    numberCurrentAccount INTEGER CHAR(7) NOT NULL,
    codeClient INTEGER CHAR(15) FOREIGN KEY (codeClient) NOT NULL,
    bank TEXT VARCHAR(10) FOREIGN KEY (bank) NOT NULL,
    code INTEGER CHAR(4) FOREIGN KEY (code) NOT NULL,
    codeAgency INTEGER CHAR(4) FOREIGN KEY (codeAgency) NOT NULL,
    openingDate DATE,
    enclosureDate DATE
)    
    `;

/*db.serialize(() => {
    db.run("CREATE TABLE [IF NOT EXISTS] bank (bank TEXT, code INT)");
    var stmt = db.prepare("INSERT INTO bank (bank, code) VALUES (?,?");

    stmt.finalize();

    db.each("SELECT * FROM bank", (error, row) => {
        if (error) {
            return console.log(error.message);
        }
        console.log(row.bank, row.code);
    });
});	

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS user (codeUser INT, nameUser TEXT, statusUser TEXT)");
    var stmt = db.prepare("INSERT INTO user (codeUser, nameUser, statusUser) VALUES (?,?,?");

    stmt.finalize();

    db.each("SELECT * FROM user", (error, row) => {
        if (error) {
            return console.log(error.message);
        }
        console.log(row.bank, row.code);
    });
});*/

db.close();

module.exports = db;