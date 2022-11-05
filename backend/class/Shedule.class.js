let SheduleModel = require("../models/Shedule.model");

class Shedule {
  constructor(routeNo, time, start, end, driverID, busNo, date) {
    this.routeNo = routeNo;
    this.time = time;
    this.start = start;
    this.end = end;
    this.driverID = driverID;
    this.busNo = busNo;
    this.date = date;
    this.newAddPShedule;
  }

  CreateModel() {

    this.newAddPShedule = new SheduleModel({
      routeNo:this.routeNo,
      time:this.time,
      start:this.start,
      end:this.end,
      driverId:this.driverID,
      busNo:this.busNo,
      date:this.date,
  });
  }

  AddData(){
    this.newAddPShedule
      .save()
      .then(() => {
        res.json("Shedule Added");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Shedule;
