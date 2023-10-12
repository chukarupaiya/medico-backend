const { addPatient } = require("../controllers/addPatient");
const { fetchallAllPatient } = require("../controllers/fetchAllPatient");
const { updatePatient } = require("../controllers/updatePatient");

const router = require("express").Router();

router.post("/add",addPatient);
router.post("/fetchall",fetchallAllPatient);
router.post("/update",updatePatient);

module.exports = router;
