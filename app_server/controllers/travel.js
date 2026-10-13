var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

if (trips && trips.length > 0) {
  console.log('Trips parsed');
}

/* GET travel view */
const travel = (req, res) => {
  res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
  travel,
};