const { update } = require("../service/update");

exports.updatePatient = async (req, res) => {
  console.log("\n[+]  request", req.method, req.originalUrl);
  console.log("[+] ", req.body);

  const updateQuery = {
    table: "patient",
    setfield: [],
    condition: [`id='${req.body.id}'`],
  };

  if (req.body.email != undefined) {
    updateQuery.setfield.push(`email='${req.body.email}'`);
  }
  if (req.body.password != undefined) {
    updateQuery.setfield.push(`password='${req.body.password}'`);
  }
  if (req.body.name != undefined) {
    updateQuery.setfield.push(`name='${req.body.name}'`);
  }

  if (req.body.age!= undefined) {
    updateQuery.setfield.push(`age='${req.body.age}'`);
  }

  if (req.body.gender != undefined) {
    updateQuery.setfield.push(`gender='${req.body.gender}'`);
  }

  if (req.body.dob != undefined) {
    updateQuery.setfield.push(`dob='${req.body.dob}'`);
  }

  if (req.body.disease != undefined) {
    updateQuery.setfield.push(`disease='${req.body.disease}'`);
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
        statusMessage: "patient successfully updated",
        status: true,
      });
      res.send({
        statusMessage: "patient successfully updated",
        status: true,
      });
    }
  });
};
