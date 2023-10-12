
const InsertInPatientTableQuery = () => {
  let string =
    "INSERT INTO `patient` (`email`, `password`,`name`,`age`,`gender`,`dob`,`disease`) VALUES (?, ?, ? , ? , ? , ? , ? );";
  return string;
};

const InsertInMedicationTableQuery = () => {
  let string =
    "INSERT INTO `medication` (`patient_id`, `medicine`,`dosage`,`time`) VALUES (?, ?, ? , ? );";
  return string;
};


module.exports = {
 
  InsertInPatientTableQuery,
  InsertInMedicationTableQuery
  
};
