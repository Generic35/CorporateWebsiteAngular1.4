var fs = require('fs');

module.exports.get = function(req, res) {
    var clientComments = fs.readFileSync('app/data/ClientComments.json', 'utf8');
    res.setHeader('Content-type', 'application/json');
    res.send(clientComments);
};