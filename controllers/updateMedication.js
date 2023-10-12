const { update } = require("../service/update");

exports.updateMedication = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "medication",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };
 

  if (req.body.patient_id != undefined) {
    updateQuery.setfield.push(`patient_id='${req.body.patient_id}'`);
  }
  if (req.body.medicine != undefined) {
    updateQuery.setfield.push(`medicine='${req.body.medicine}'`);
  }
  if (req.body.dosage != undefined) {
    updateQuery.setfield.push(`dosage='${req.body.dosage}'`);
  }
  if (req.body.time!= undefined) {
    updateQuery.setfield.push(`time='${req.body.time}'`);
  }
  
  
  await update(updateQuery, async (err, result) => {
    if (err) {
      console.log(`[-]  `, {
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
      res.send({
        error: err,
        statusMessage: "something went wrong",
        status: false,
      });
    } else {
      console.log(`[+]  `, {
        statusMessage: "Medication successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "Medication successfully updated",
        status: true,
      });
    }
  });
};
