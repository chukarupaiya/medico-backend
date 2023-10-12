const { createTable } = require("../service/createTable");
const { showTables } = require("../service/showTables");

const { insert } = require("../service/insert");

const {
 
  PatitentTableCreateQuery,
  MedicationTableCreateQuery,
 
} = require("../database/model/createTable");


exports.createInitialTable = async () => {
  console.log("[+] initialling initial table check ");
  let presentTable = [];
  await showTables(async (result) => {
    presentTable.push(...result);
    presentTable.map((table, index) => {
      presentTable[index] = table[`Tables_in_${process.env.DB_NAME}`];
    });

   
    if (presentTable.includes("patient") != true) {
      createTable(PatitentTableCreateQuery(), (result) => {
        console.log("[+] Patient Table Created");
      });
    }

    if (presentTable.includes("medication") != true) {
      createTable(MedicationTableCreateQuery(), (result) => {
        console.log("[+] Medication Table Created");
      });
    }

    
  });
  //refreshValues();
};
