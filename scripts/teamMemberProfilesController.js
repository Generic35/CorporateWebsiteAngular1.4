var fs = require('fs');

module.exports.get = function(req, res) {
    var teamMemberProfiles = fs.readFileSync('app/data/TeamMemberProfiles.json', 'utf8');
    res.setHeader('Content-type', 'application/json');
    res.send(teamMemberProfiles);
};