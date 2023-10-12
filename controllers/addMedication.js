const { InsertInMedicationTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  

  `patient_id`, `medicine`,`dosage`,`time`

  exports.addMedication = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInMedicationTableQuery(),
                "medication",
                [
                    req.body.patient_id,
                    req.body.medicine,
                    req.body.dosage,
                    req.body.time 
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "Medication Registration succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "Medication Registration succeed",
                            status: true,
                        });
                        } 
                    }
                );
            } catch (err) {
                console.log(`[-]  `, {
                error: err,
          statusMessage: "something went wrong in function",
          status: false,
        });
        res.send({
          error: err,
          statusMessage: "something went wrong",
          status: false,
        });
      }
    
  };
  