const router = require("express").Router();

const animalsRouter = require("./api/animals");

router.use("/animals", animalsRouter);

module.exports = router;