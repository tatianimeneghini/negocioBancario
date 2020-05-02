const BankDao = require("../infra/bankDao");
const AgencyDao = require("../infra/agencyDao");
const ClientDao = require("../infra/clientDao");
const CurrentAccountDao = require("../infra/currentAccountDao");
const db = require("../../config/database");

module.exports = (app) => {
    
    //Raiz do projeto
    app.get("/", (request, response) => {
        response.send(`
        <html>
        <head>
            <meta charset="utf-8">
            <title>Negócio Bancário</title>
        </head>
        <body>            
            <header>
            <div class="container" align="center" style="background-color: #e2e2fc">
                <div class="logo" align="center" class="rounded-circle">
                    <img src="https://cdn.dribbble.com/users/1322388/screenshots/6480681/online-banking1.jpg" alt="Online Banking 
                        Transaction Illustration, by Alex Krugli" width=40% height=50%>
                    </img>
                </div>
            <font face="Verdana" size="7" color=#6038a5><b>Negócio Bancário</b></font>
            </div>
            </header>
            <br>
            <div>
            <font face="Calibri" size="4" color=#8682a8>Negócio Bancário desenvolvido por Tatiani Meneghini.</font>
            </div>
        </body>
        </html>
        `)
    });

    //Bank
    app.get("/bank", (request, response) => {
        const bankDao = new BankDao(db);
        bankDao.list()
        .then(response.redirect("/bank"))
        .catch(error => console.log(error));
    });

    /*app.get("/bank/form", (request, response) => {
        response.send(require(), { bank: {} })
    });*/

    app.post("/bank", (request, response) => {
        console.log(request.body);
        const bankDao = new BankDao(db);
        bankDao.add(request.body)
            .then(response.redirect("/bank"))
            .catch(error => console.log(error));
    });

    app.put("/bank", (request, response) => {
        console.log(request.body);
        const bankDao = new BankDao(db);
        bankDao.update(request.body)
            .then(response.redirect("/bank"))
            .catch(erro => console.log(erro));
    });

    app.delete("/bank/:id", (request, response) => {
        const id = request.params.id;
        const bankDao = new BankDao(db);
        bankDao.remove(request.body)
            .then(() => response.status(200).end())
            .catch(error => console.log(error));    
        
    });

    //Agency
    app.get("/agency", (request, response) => {
        agencyDao.list(request.body)
            .then(response.redirect("/agency"))
            .catch(erro => console.log(erro));
    });

    app.post("/agency", (request, response) => {
        console.log(request.body);
        const agencyDao = new AgencyDao(db);
        agencyDao.add(request.body)
            .then(response.redirect("/agency"))
            .catch(error => console.log(error));
    });

    app.put("/agency/:id/modify", (request, response) => {
        const id = request.params.id;
        const agencyDao = new AgencyDao(db);
        agencyDao.modify(request.body)
            .then(response.redirect("/agency"))
            .catch(erro => console.log(erro));
    });

    app.delete("/agency/:id/delete", (request, response) => {
        const id = request.params.id;
        const agencyDao = new AgencyDao(db);
        agencykDao.remove(request.body)
            .then(() => response.status(200).end())
            .catch(error => console.log(error));    
        
    });

    //Client
    app.get("/client", (request, response) => {
        clientDao.list(request.body)
            .then(response.redirect("/client"))
            .catch(erro => console.log(erro));
    });

    app.post("/client", (request, response) => {
        console.log(request.body);
        const clientDao = new ClientDao(db);
        clientDao.add(request.body)
            .then(response.redirect("/client"))
            .catch(error => console.log(error));
    });

    app.put("/client/:id/modify", (request, response) => {
        const id = request.params.id;
        const clientDao = new ClientDao(db);
        clientDao.modify(request.body)
            .then(response.redirect("/client"))
            .catch(erro => console.log(erro));
    });

    app.delete("/client/:id/delete", (request, response) => {
        const id = request.params.id;
        const clientDao = new ClientDao(db);
        clientDao.remove(request.body)
            .then(() => response.status(200).end())
            .catch(error => console.log(error));    
        
    });

    //Current account
    app.get("/account", (request, response) => {
        currentAccountDao.list(request.body)
            .then(response.redirect("/account"))
            .catch(erro => console.log(erro));
    });

    app.post("/account", (request, response) => {
        console.log(request.body);
        const currentAccountDao = new CurrentAccountDao(db);
        currentAccountDao.add(request.body)
            .then(response.redirect("/account"))
            .catch(error => console.log(error));
    });

    app.put("/account/:id/modify", (request, response) => {
        const id = request.params.id;
        const currentAccountDao = new CurrentAccountDao(db);
        currentAccountDao.modify(request.body)
            .then(response.redirect("/account"))
            .catch(erro => console.log(erro));
    });

    app.delete("/account/:id/delete", (request, response) => {
        const id = request.params.id;
        const currentAccountDao = new CurrentAccountDao(db);
        currentAccountkDao.remove(request.body)
            .then(() => response.status(200).end())
            .catch(error => console.log(error));    
        
    });


};