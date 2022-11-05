const router = require("express").Router();
let Price = require("../models/Price.model");

router.route("/add").post((req, res) => {
  const tackon = req.body.tackon;
  const takeoff = req.body.takeoff;
  const distance = req.body.distance;
  const price = req.body.price;
  const routeNo = req.body.routeNo;
  console.info(routeNo);
  const newAddPPrice = new Price({
    tackon,
    takeoff,
    distance,
    price,
    routeNo
  });

  newAddPPrice
    .save()
    .then(() => {
      res.json("Price Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  Price.find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;