var express = require('express');
var brandStore = require('json-fs-store')('store/companies');
var router = express.Router();
var uuid = require('node-uuid');

/* GET a list of brands */
router.get('/', function(req, res, next) {
    brandStore.list(function(err, brands) {
        if (err) throw err;
        
        //process here to prevent client-side slow down and network usage
        var brandRes = [];
        for(var i = 0; i < brands.length; i++){
            if(brands[i].company_type == "BRAND")
                brandRes.push(brands[i]);
        }

        res.json(brandRes); //output the brands
    });
});
router.get('/:id', function(req, res, next) {
    brandStore.load(req.params.id, function(err, brand) {
        if (err) throw err;

        res.json(brand);
    });
});
router.post('/', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);

    var body = req.body; //request body content
  
    var newBrand = {
        id: (req.body.id) ? req.body.id : uuid.v4(), //assign the ID passed with request or a random one
        company_type: "BRAND",
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        city: req.body.city,
        state: req.body.state
    };
    brandStore.add(newBrand, function(err) {
        if (err) throw err;

        res.json(newBrand);
    });
});

router.delete('/:id', function(req, res) {
    brandStore.remove(req.params.id, function(err, brand) {
        if (err) throw err;
        
        res.json('The Brand is now deleted.');
    });
});

module.exports = router;
