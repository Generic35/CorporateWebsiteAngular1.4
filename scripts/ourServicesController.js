var fs = require('fs');

module.exports.get = function(req, res) {
    var ourServices = fs.readFileSync('app/data/Services.json', 'utf8');
    res.setHeader('Content-type', 'application/json');
    res.send(ourServices);
};