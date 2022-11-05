const router = require("express").Router();
let SheduleModel = require("../models/Shedule.model");
let Shedule = require("../class/Shedule.class");

router.route("/add").post((req, res) => {
  let schedule = new Shedule(
    req.body.routeNo,
    req.body.time,
    req.body.start,
    req.body.end,
    req.body.driverID,
    req.body.busNo,
    req.body.date
  );

  schedule.CreateModel();
  schedule.AddData();

});

router.route("/get").get((req, res) => {
  Shedule.find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:routeNo").put(async (req, res) => {
  let GNumber = req.params.routeNo;
  const { routeNo, time, start, end, driverID, busNo, date } = req.body;

  const UpdateShedule = {
    routeNo,
    time,
    start,
    end,
    driverID,
    busNo,
    date,
  };

  const update = await Shedule.findOneAndUpdate(
    { routeNo: GNumber },
    UpdateShedule
  )
    .then(() => {
      res.status(200).send({ status: "Shedule Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating", error: err.message });
    });
});

router.route("/delete/:routeNo").delete(async (req, res) => {
  let GNumber = req.params.routeNo;

  Shedule.findOneAndDelete({ routeNo: GNumber })
    .then((shedule) => res.send(shedule))

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
