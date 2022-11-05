const router = require("express").Router();
let Inspector = require("../models/Inspector.model");

router.route("/add").post((req, res) => {
  const inspectorID = req.body.inspectorID;
  const inspectorName = req.body.inspectorName;
  const inspectorDoB = req.body.inspectorDoB;
  const inspectorNic = req.body.inspectorNic;
  const inspectorContactNo = req.body.inspectorContactNo;
  const inspectorDeport = req.body.inspectorDeport;
  const inspectorRoute = req.body.inspectorRoute;

  const newAddPInspector = new Inspector({
    inspectorID,
    inspectorName,
    inspectorDoB,
    inspectorNic,
    inspectorContactNo,
    inspectorDeport,
    inspectorRoute,
  });

  newAddPInspector
    .save()
    .then(() => {
      res.json("Inspector Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  Inspector.find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:inspectorID").put(async (req, res) => {
  let GNumber = req.params.inspectorID;
  const {
    inspectorID,
    inspectorName,
    inspectorDoB,
    inspectorNic,
    inspectorContactNo,
    inspectorDeport,
    inspectorRoute,
  } = req.body;

  const UpdateInspector = {
    inspectorID,
    inspectorName,
    inspectorDoB,
    inspectorNic,
    inspectorContactNo,
    inspectorDeport,
    inspectorRoute,
  };

  const update = await Inspector.findOneAndUpdate(
    { inspectorID: GNumber },
    UpdateInspector
  )
    .then(() => {
      res.status(200).send({ status: "inspector Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating", error: err.message });
    });
});

router.route("/delete/:inspectorID").delete(async (req, res) => {
  let GNumber = req.params.inspectorID;

  Inspector.findOneAndDelete({ inspectorID: GNumber })
    .then((inspector) => res.send(inspector))

    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:inspectorID").get(async (req, res) => {
  let GNumber = req.params.inspectorID;

  Inspector.find({ inspectorID: GNumber })
    .then((inspector) => res.send(inspector))

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;


router.get("/getRoadReport", async (req, res) => {
  var html_to_pdf = require("html-pdf-node");
  var fs = require("fs");

  let options = { format: "A4" };
  let dataTR = "";
  Inspector.find({}, async function (err, data) {
    if (err) {
      console.log(err);
    } else {
      data.map((sell) => {
        dataTR +=
          `
                <tr>
                    <td>` +
          sell.name +
          `</td>
                    <td>` +
          sell.date +
          `</td>
                    <td>` +
          sell.amount +
          `</td>
                <td>
                ` +
          sell.lorryNumber +
          `</td>
                </tr>
                `;
      });

      let table =
        `

            <!DOCTYPE html>
            <html>
            <head>
            <style>
            table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            }
            
            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }
            
            tr:nth-child(even) {
            background-color: #dddddd;
            }
            body{
                padding: 10px 50px;
            }
            h2{
                background: #049940;
                padding: 10px;
                border-radius: 100px;
            }
            </style>
            </head>
            <body>
            <div style="text-align: center;">
                <img src="https://tea-collector-api.herokuapp.com/download/downloadLogo" alt="logo" width="80" height="80">
                <h3 class="fs-4" style="color: rgb(9, 180, 77); font-weight: bold;padding:0px;margin:0px;">Tea Collector</h3> 
            </div>

            <h3>TeaCollector Sales Report</h3>
            <table>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Ammount</th>
                <th>Lorry Number</th>
            </tr>
            ` +
        dataTR +
        `
            </table>
            
            </body>
            </html>
            `;

      let file = { content: table };
      html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
        fs.writeFileSync("../report.pdf", pdfBuffer);
        res.download("../report.pdf");
      });
    }
  });
});



module.exports = router
