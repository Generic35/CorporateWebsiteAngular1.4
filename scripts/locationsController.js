var fs = require('fs');

module.exports.get = function(req, res) {
    var locations = fs.readFileSync('app/data/Locations.json', 'utf8');
    res.setHeader('Content-type', 'application/json');
    res.send(locations);
};