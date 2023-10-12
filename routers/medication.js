const { addMedication } = require("../controllers/addMedication");
const { fetchallAllMedication } = require("../controllers/fetchAllMedication");
const { updateMedication } = require("../controllers/updateMedication");

const router = require("express").Router();

router.post("/add",addMedication);
router.post("/fetchall",fetchallAllMedication);
router.post("/update",updateMedication);



module.exports = router;
