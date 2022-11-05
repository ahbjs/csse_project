const router = require("express").Router();
let Driver = require("../models/Driver.model");

router.route("/add").post((req, res) => {
  const driverID = req.body.driverID;
  const driverName = req.body.driverName;
  const driverDoB = req.body.driverDoB;
  const driverNic = req.body.driverNic;
  const driverContactNo = req.body.driverContactNo;
  const driverDeport = req.body.driverDeport;
  const driverRoute = req.body.driverRoute;

  const newAddPDriver = new Driver({
    driverID,
    driverName,
    driverDoB,
    driverNic,
    driverContactNo,
    driverDeport,
    driverRoute,
  });

  newAddPDriver
    .save()
    .then(() => {
      res.json("Driver Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  Driver.find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:driverID").put(async (req, res) => {
  let GNumber = req.params.driverID;
  const {
    driverID,
    driverName,
    driverDoB,
    driverNic,
    driverContactNo,
    driverDeport,
    driverRoute,
  } = req.body;

  const UpdateDriver = {
    driverID,
    driverName,
    driverDoB,
    driverNic,
    driverContactNo,
    driverDeport,
    driverRoute,
  };

  const update = await Driver.findOneAndUpdate(
    { driverID: GNumber },
    UpdateDriver
  )
    .then(() => {
      res.status(200).send({ status: "Driver Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating", error: err.message });
    });
});

router.route("/delete/:driverID").delete(async (req, res) => {
  let GNumber = req.params.driverID;

  Driver.findOneAndDelete({ driverID: GNumber })
    .then((driver) => res.send(driver))

    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:driverID").get(async (req, res) => {
  let GNumber = req.params.driverID;

  Driver.find({ driverID: GNumber })
    .then((driver) => res.send(driver))

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
