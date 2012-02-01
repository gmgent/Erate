
/*
 * GET home page.
 */

exports.index = function(req, res){
  var rc = req.params.runcode;
  var exchange = require('exchange-rates');
  

  exchange.load('http://openexchangerates.org/historical/2006-02-16.json', function(error, data) {
    // etc...
    var jsonObject = JSON.parse(data);
    
    res.render('index', { title: 'Erate.TV', day_rate: jsonObject, runcode: rc});

        });
};