const { InsertInPatientTableQuery} = require("../database/model/insertTable");
  const { select } = require("../service/select");
  const { insert } = require("../service/insert");
  const { deleteRow } = require("../service/delete");
  const { deleteFromTable } = require("../database/model/deleteTable");
  
  exports.addPatient = async (req, res) => {
    console.log("\n[+]  request", req.method, req.originalUrl);
    console.log("[+] ", req.body);
   
    try {    insert(
                InsertInPatientTableQuery(),
                "patient",
                [
                    req.body.email,
                    req.body.password,
                    req.body.name, 
                    req.body.age,
                    req.body.gender,
                    req.body.dob,
                    req.body.disease      
                ],
                (err) => {
                    if (!err) {
                        console.log(`[+]  `, {
                            statusMessage: "Patient added succeed",
                            status: true,
                        });
                        res.send({
                            statusMessage: "Patient added succeed",
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
  