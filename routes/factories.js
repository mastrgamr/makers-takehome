var express = require('express');
var factoryStore = require('json-fs-store')('store/companies');
var router = express.Router();

/* GET a list of factories */
router.get('/', function(req, res, next) {
    factoryStore.list(function(err, factories) {
        if (err) throw err;

        //process here to prevent client-side slow down and network usage
        var factoryRes = [];
        for(var i = 0; i < factories.length; i++){
            if(factories[i].company_type == "FACTORY")
                factoryRes.push(factories[i]);
        }

        res.json(factoryRes); //output the factories
    });
});
router.get('/:id', function(req, res, next) {
    factoryStore.load(req.params.id, function(err, factory) {
        if (err) throw err;

        res.json(factory);
    });
});
router.post('/', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);

    var body = req.body; //request body content
  
    var newFactory = {
        id: (req.body.id) ? req.body.id : uuid.v4(), //assign the ID passed with request or a random one
        company_type: "FACTORY",
        name: body.name,
        email: body.email,
        phone_number: body.phone_number,
        city: body.city,
        state: body.state
    };
    factoryStore.add(newFactory, function(err) {
        if (err) throw err;

        res.json(newFactory);
    });
});

router.delete('/:id', function(req, res) {
    factoryStore.remove(req.params.id, function(err, factory) {
        if (err) throw err;

        res.json('The Factory is now deleted.');
    });
});

module.exports = router;
