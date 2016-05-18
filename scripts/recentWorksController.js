var fs = require('fs');

module.exports.get = function(req, res) {
    var recentWork = fs.readFileSync('app/data/recentWork.json', 'utf8');
    res.setHeader('Content-type', 'application/json');
    res.send(recentWork);
};