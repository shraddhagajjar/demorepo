var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('test', {title: ':: 15992 Quize4 ::', label1: 'Number 1 ', label2: 'Number 2 '});
});
router.post('/test', function (req, res, next) {

    var number1 = req.body.number1;
    var number2 = req.body.number2;
    var type1 = req.body.max;
    var type2 = req.body.min;
    var max = "max";
    var min = "min";

              var data = "You entered " + number1 + " And " + number2 + " and ";
            if (type1 === max)
                if (number1 > number20)
                    data += number1 + " Maximum Number"
                else
                    data += number2 + " Maximum Number"

            if (type2 === min)
                if (number1 < number2)
                    data += number1 + " Minimum Number"
                else
                    data += number2 + " Minimum Number"


    });

module.exports = router;
