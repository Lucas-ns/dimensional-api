const express = require("express");
const app = express();

/* ROUTES
 * HTTP Method
 *  - GET - Pega uma informação
 *  - POST - Cria uma informação
 *  - PUT - Altera toda a informação
 *  - PATCH - Altera parte da informação
 *  - DELETE - Apaga uma informação
 *
 *
 * Name - Um identificador da rota
 * Function (Callback) - Responsável por executar algum comando
 */

app.get("/sum", (req, res) => {
  const sum = 1 + 1;

  res.send({ sum: sum });
});

app.listen(3000, () => {
  console.log("Express running at http://localhost:3000");
});
