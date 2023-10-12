

const PatitentTableCreateQuery = () => {
  string =
    "CREATE TABLE `patient` (`id` INT NOT NULL AUTO_INCREMENT ,`email` varchar(255) NOT NULL,`password` varchar(255) NOT NULL ,`name` varchar(255) NOT NULL,`age` varchar(255) NOT NULL,`gender` varchar(255) NOT NULL,`dob` varchar(255) NOT NULL,`disease` varchar(255) NOT NULL,PRIMARY KEY (`id`));";
  return string;
};

const MedicationTableCreateQuery = () => {
  string =
    "CREATE TABLE `medication` (`id` INT NOT NULL AUTO_INCREMENT ,`patient_id` INT NOT NULL,`medicine` varchar(255) NOT NULL,`dosage` varchar(255) NOT NULL ,`time` varchar(255) NOT NULL ,PRIMARY KEY (`id`));";
  return string;
};

module.exports = {
  
  PatitentTableCreateQuery,
  MedicationTableCreateQuery

};
