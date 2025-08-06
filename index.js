// index.js

/**
 * Função HTTP para Cloud Functions.
 * Endpoint acessível via requisição HTTP.
 */
exports.gcpFunctionTesteCICD = (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head><title>Cloud Run Test Bartran</title></head>
    <body>
      <h1>Deploy NGINX no Cloud Run com GitLab CI</h1>
    </body>
    </html>
  `);
};
