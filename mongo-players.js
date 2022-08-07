const convert = require('xml-js');
const fs = require('fs');
const path = require('path');

const text = ({ _text }) => _text;

const json = fs.readFileSync(path.join(__dirname, 'test/new_players.xml'), { encoding: 'utf8' });

const data = convert
  .xml2js(json, { compact: true })
  .json.FantasyBaseballNerd.Player.map(
    ({ playerId, playerName, position, team, bats, throws, height, weight, jersey, dob }) => {
      return JSON.stringify({
        playerId: parseInt(text(playerId)),
        name: text(playerName),
        position: text(position),
        team: text(team),
        bats: text(bats),
        throws: text(throws),
        height: text(height),
        weight: text(weight),
        jersey: text(jersey),
        dob: text(dob),
      });
    }
  )
  .join('\n');

fs.writeFile('test/players.json', data, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successfully wrote to file');
  }
});
