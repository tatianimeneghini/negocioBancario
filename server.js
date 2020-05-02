const app = require("./src/config/custom-express.js");
const port = 5000;

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
});